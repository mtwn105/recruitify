import { Job } from './graphql/API';
import { generateClient } from 'aws-amplify/data';
import { data, type Schema } from "../../data/resource"
import { env } from "$amplify/env/new-job";
import { Amplify } from "aws-amplify";
import { getJob, listUserProfiles } from './graphql/queries';
import { Logger } from "@aws-lambda-powertools/logger";
import { createJobNotifications } from './graphql/mutations';
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
  InvokeModelCommandInput,
} from "@aws-sdk/client-bedrock-runtime";
type Handler = Schema["generateJobDescription"]["functionHandler"]

const logger = new Logger({
  logLevel: "INFO",
  serviceName: "generateJobDescription",
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
  let jobDescription = '';

  const { title, domain, minExperience, skills } = event.arguments

  try {

    const client = new BedrockRuntimeClient();


    const text = `
          Job Title: ${title}
          Job Domain: ${domain}
          Job Min Experience: ${minExperience} years
          Job Required Skills: ${skills}
        `
    const prompt = `Your task is to generate a job description for below-given job details.

        Job Details: ${text}

        Job Description: `

    logger.info("Prompt " + prompt)

    // Invoke model
    const input = {
      modelId: "mistral.mistral-7b-instruct-v0:2",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        prompt: `<s>[INST] ${prompt} [/INST]`,
        max_tokens: 2000,
        temperature: 0.5,
      }),
    } as InvokeModelCommandInput;

    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    const decodedResponseBody = new TextDecoder().decode(response.body);
    const data = JSON.parse(decodedResponseBody);
    logger.info("Response " + decodedResponseBody)
    return data.outputs[0].text;

  } catch (err) {
    logger.error("Error details:", JSON.stringify(err))
  }

  return jobDescription;

}