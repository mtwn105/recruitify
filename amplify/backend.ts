import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { newJob } from './functions/new-job/resource';

defineBackend({
  auth,
  data,
  storage,
  newJob
});
