import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
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
  }
];
