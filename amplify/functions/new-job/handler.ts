import { Job } from './graphql/API';
import { generateClient } from 'aws-amplify/data';
import { data, type Schema } from "../../data/resource"
import { env } from "$amplify/env/new-job";
import { Amplify } from "aws-amplify";
import { getJob, listUserProfiles } from './graphql/queries';
import { Logger } from "@aws-lambda-powertools/logger";
import { createJobNotifications } from './graphql/mutations';

type Handler = Schema["sendJobNotification"]["functionHandler"]

const logger = new Logger({
  logLevel: "INFO",
  serviceName: "sendJobNotification",
});


Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.RECRUITIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
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
    // const job = await client.models.Job.get({ id: jobId });
    try {
      const job = await client.graphql({
        query: getJob,
        variables: {
          id: jobId
        }
      });

      logger.info("Job " + JSON.stringify(job));



      if (job.data && job.data.getJob && job.data.getJob.skills && job.data.getJob.skills.length > 0) {

        const skillsCondition: any = [];

        job.data.getJob.skills.split(",").forEach((skill) => {
          skillsCondition.push({
            skills: {
              contains: skill
            }
          })
        });

        logger.info("Job Condtions " + JSON.stringify(skillsCondition));


        const users = await client.graphql({
          query: listUserProfiles,
          variables: {
            filter: {
              or: skillsCondition
            }
          }
        })

        logger.info("Users " + JSON.stringify(users));


        if (users.data && users.data.listUserProfiles && users.data.listUserProfiles.items && users.data.listUserProfiles.items.length > 0) {

          users.data.listUserProfiles.items.forEach((user) => {
            client.graphql({
              query: createJobNotifications,
              variables: {
                input: {
                  userId: user.userId,
                  jobId: jobId,
                  jobTitle: job.data?.getJob?.title,
                  companyId: companyId,
                  status: 'SENT'
                }
              }
            })
          })


        }

      }
    } catch (err) {
      logger.error("Error details:", JSON.stringify(err))
      console.error("Error details:", JSON.stringify(err, null, 2));
    }

  }
  // to satisfy the handler's "returnType" requirement, return the Haiku
  return "Notification Sent Started"

}