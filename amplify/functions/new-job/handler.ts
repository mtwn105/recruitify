import { generateClient } from 'aws-amplify/data';
import { type Schema } from "../../data/resource"
import { env } from "$amplify/env/new-job";
import { Amplify } from "aws-amplify";

type Handler = Schema["sendJobNotification"]["functionHandler"]

Amplify.configure(
  {

  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>();


export const handler: Handler = async (event) => {
  // arguments are typed based on the query definition
  const { jobId, companyId } = event.arguments

  if (jobId) {
    const job = await client.models.Job.get({ id: jobId });

    if (job.data && job.data.skills && job.data.skills.length > 0) {

      const skillsCondition: any = [];

      job.data.skills.split(",").forEach((skill) => {
        skillsCondition.push({
          skills: {
            contains: skill
          }
        })
      });

      const users = await client.models.UserProfile.list({
        filter: {
          or: skillsCondition
        }
      })

      if (users.data && users.data.length > 0) {

        users.data.forEach((user) => {
          client.models.JobNotifications.create({
            userId: user.userId,
            jobId: jobId,
            jobTitle: job.data?.title,
            companyId: companyId,
            status: 'SENT'
          })
        })


      }

    }

  }
  // to satisfy the handler's "returnType" requirement, return the Haiku
  return "Notification Sent Started"

}