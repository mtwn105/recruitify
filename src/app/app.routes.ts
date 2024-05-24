import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { JobsComponent } from './jobs/jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/jobs',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: AuthComponent
  // }
  {
    path: 'create-profile',
    component: ProfileCreationComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'create-job',
    component: CreateJobComponent
  },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent
  }
];
