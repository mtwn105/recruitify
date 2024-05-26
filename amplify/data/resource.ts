import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { newJob } from '../functions/new-job/resource';

const schema = a.schema({
  User: a
    .model({
      id: a.id(),
      username: a.string(),
      name: a.string().required(),
      type: a.enum(['COMPANY', 'INDIVIDUAL']),
      email: a.email().required(),
      phone: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  UserProfile: a
    .model({
      id: a.id(),
      name: a.string(),
      experience: a.float(),
      education: a.string(),
      currentOrg: a.string(),
      currentRole: a.string(),
      domain: a.string(),
      skills: a.string(),
      city: a.string(),
      country: a.string(),
      expectedSalary: a.float(),
      resume: a.string(),
      resumeFileName: a.string(),
      website: a.string(),
      linkedin: a.string(),
      github: a.string(),
      userId: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  CompnayProfile: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(),
      logo: a.string(),
      industry: a.string(),
      website: a.string(),
      userId: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Job: a
    .model({
      id: a.id(),
      companyId: a.string(),
      title: a.string(),
      skills: a.string(),
      domain: a.string(),
      minExperience: a.float(),
      salary: a.float(),
      city: a.string(),
      country: a.string(),
      isRemote: a.boolean().default(false),
      description: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  JobApplications: a
    .model({
      id: a.id(),
      jobId: a.string(),
      userId: a.string(),
      companyId: a.string(),
      status: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  JobNotifications: a
    .model({
      id: a.id(),
      jobId: a.string(),
      jobTitle: a.string(),
      companyId: a.string(),
      userId: a.string(),
      status: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  sendJobNotification: a.mutation()
    .arguments({ jobId: a.string(), companyId: a.string() })
    .returns(a.string())
    .authorization(allow => [allow.publicApiKey()])
    .handler(a.handler.function(newJob))
}).authorization((allow) => [allow.resource(newJob)]);;

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  name: 'recruitify-data',
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
