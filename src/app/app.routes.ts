import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { JobsComponent } from './jobs/jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';

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
    path: 'myjobs',
    component: MyjobsComponent
  },
  {
    path: 'create-job',
    component: CreateJobComponent
  },
  {
    path: 'edit-job/:id',
    component: EditJobComponent
  },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent
  },
  {
    path: 'job-applications/:id',
    component: ViewApplicationsComponent
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
];
