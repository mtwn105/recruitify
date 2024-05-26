import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { JobCardComponentComponent } from '../job-card-component/job-card-component.component';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { AuthService } from '../services/auth.service';
import { downloadData } from 'aws-amplify/storage';
import { Router } from '@angular/router';
import { LoadingInterceptorService } from '../loading-interceptor.service';

const client = generateClient<Schema>();
@Component({
  selector: 'app-myjobs',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, JobCardComponentComponent], templateUrl: './myjobs.component.html',
  styleUrl: './myjobs.component.css'
})
export class MyjobsComponent {
  jobs: any[] = [];
  // myJobs: any[] = [];
  loggedInUser: any;

  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService, private loadingService: LoadingInterceptorService) { }

  ngOnInit() {

    this.loadingService.show();
    this.getUser();
    this.fetchJobs();

  }
  getUser() {
    this.loggedInUser = this.authService.userProfile;
    if (this.loggedInUser.type == 'COMPANY') {
      client.models.CompnayProfile.list({
        filter: {
          userId: {
            eq: this.loggedInUser.username
          }
        }
      }).then(profile => {
        this.loggedInUser.profile = profile.data[0];
      });
    } else {
      client.models.UserProfile.list({
        filter: {
          userId: {
            eq: this.loggedInUser.username
          }
        }
      }).then(profile => {
        this.loggedInUser.profile = profile.data[0];
      });
    }
  }

  fetchJobs() {

    if (this.authService.userProfile.type != 'COMPANY') {

      client.models.JobApplications.list({
        filter: {
          userId: {
            eq: this.authService.userProfile.id
          }
        },
      }).then(applications => {
        this.loadingService.hide();
        console.log("My Jobs>", applications);
        let applicationsData = applications.data;

        // sort by createdAt desc
        applicationsData.sort((a, b) => {
          if (a.createdAt > b.createdAt) {
            return -1;
          } else if (a.createdAt < b.createdAt) {
            return 1;
          } else {
            return 0;
          }
        });

        for (let application of applicationsData) {
          if (application.jobId) {
            client.models.Job.get({
              id: application.jobId
            }).then(job => {
              console.log("Job>", job);
              let jobData: any = job.data;
              jobData.application = application;
              if (jobData) {
                if (jobData.skills) {
                  jobData.skills = jobData.skills.split(',');
                }

                console.log("Fetching profile for job: ", jobData.id);
                if (jobData.companyId) {
                  client.models.CompnayProfile.list({
                    filter: {
                      userId: {
                        eq: jobData.companyId
                      }
                    }
                  }).then(profile => {
                    console.log("Job profile: ", profile);
                    jobData.companyProfile = profile.data[0];


                    if (jobData.companyProfile && jobData.companyProfile.logo) {
                      downloadData({
                        path: jobData.companyProfile.logo,
                      }).result.then(data => {
                        data.body.text().then(blob => {
                          // write to bytes
                          // console.log(blob);
                          jobData.companyProfile.logo = blob;
                        })
                      })
                    }

                  });
                }
              }
              this.jobs.push(jobData);
            });
          }
        }

      });
    } else {

      client.models.Job.list({
        filter: {
          companyId: {
            eq: this.authService.userProfile.id
          }
        }
      }).then(jobs => {
        this.loadingService.hide();
        console.log("My Jobs>", jobs);
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
      });
    }

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

  findJobs() {
    this.router.navigate(['jobs']);
  }
}
