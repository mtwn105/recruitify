import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { AuthService } from '../services/auth.service';
import { downloadData } from 'aws-amplify/storage';
import { JobCardComponentComponent } from '../job-card-component/job-card-component.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingInterceptorService } from '../loading-interceptor.service';

const client = generateClient<Schema>();
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, JobCardComponentComponent, FormsModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {
  jobs: any[] = [];
  filteredJobs: any[] = [];
  // myJobs: any[] = [];
  loggedInUser: any;
  searchJobTerm = '';

  constructor(public authenticator: AuthenticatorService, private router: Router, public authService: AuthService, private loadingService: LoadingInterceptorService) {

  }

  ngOnInit() {
    this.loadingService.show();
    this.getUser();
    this.fetchJobs();

  }
  getUser() {
    this.loggedInUser = this.authService.userProfile;
    // if (this.loggedInUser.type == 'COMPANY') {
    //   client.models.CompnayProfile.list({
    //     filter: {
    //       userId: {
    //         eq: this.loggedInUser.username
    //       }
    //     }
    //   }).then(profile => {
    //     this.loggedInUser.profile = profile.data[0];
    //   });
    // } else {
    //   client.models.UserProfile.list({
    //     filter: {
    //       userId: {
    //         eq: this.loggedInUser.username
    //       }
    //     }
    //   }).then(profile => {
    //     this.loggedInUser.profile = profile.data[0];
    //   });
    // }
  }

  fetchJobs() {
    client.models.Job.list({
      filter: {
        companyId: {
          attributeExists: true
        }
      }
    }).then(jobs => {
      console.log(jobs);
      this.jobs = jobs.data;

      // sort by createdAt desc
      this.jobs.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        } else if (a.createdAt < b.createdAt) {
          return 1;
        } else {
          return 0;
        }
      });

      for (let job of this.jobs) {

        if (job.skills) {
          job.skills = job.skills.split(',');
        }

        console.log("Fetching profile for job: ", job.id);
        if (job.companyId) {
          client.models.CompnayProfile.list({
            filter: {
              userId: {
                eq: job.companyId
              }
            }
          }).then(profile => {
            console.log("Job profile: ", profile);
            job.companyProfile = profile.data[0];


            if (job.companyProfile && job.companyProfile.logo) {
              downloadData({
                path: job.companyProfile.logo,
              }).result.then(data => {
                data.body.text().then(blob => {
                  // write to bytes
                  // console.log(blob);
                  job.companyProfile.logo = blob;
                })
              })
            }

          });
        }
      }
    }).finally(() => {
      this.loadingService.hide();
    });

    // client.models.Job.list({
    //   filter: {
    //     companyId: {
    //       eq: this.loggedInUser.username
    //     }
    //   }
    // }).then(jobs => {
    //   console.log(jobs);
    //   this.myJobs = jobs.data;
    // });
  }

  createJob() {
    this.router.navigate(['create-job']);
  }

  filterJobs(event: any) {
    const value = event.target.value.toLowerCase()
    this.filteredJobs = this.jobs.filter((job) => {
      let skills = job?.skills
      if (skills) {
        skills = skills.join(",").toLowerCase();
      }
      return job?.title?.toLowerCase().includes(value) || job?.companyProfile?.name?.toLowerCase().includes(value) || (skills ? skills.includes(value) : true) || job?.domain?.toLowerCase().includes(value) || job?.country?.toLowerCase().includes(value) || job?.city?.toLowerCase().includes(value)
    });
  }

}
