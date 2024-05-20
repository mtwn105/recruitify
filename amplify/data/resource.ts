import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

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
      experience: a.integer(),
      education: a.string(),
      currentOrg: a.string(),
      currentRole: a.string(),
      domain: a.string(),
      skills: a.string(),
      city: a.string(),
      country: a.string(),
      expectedSalary: a.float(),
      resume: a.string(),
      website: a.string(),
      linkedin: a.string(),
      github: a.string(),
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
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
