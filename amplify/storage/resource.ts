import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'recruitifyFiles',
  access: (allow) => ({
    'companyLogos/*': [
      allow.authenticated.to(['read', 'write']),
      allow.guest.to(['read', 'write'])
    ],
    'resumes/*': [
      allow.authenticated.to(['read', 'write']),
      allow.guest.to(['read', 'write'])
    ],
  })
});