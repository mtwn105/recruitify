import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { TimeAgoPipe } from '../time-ago.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { downloadData } from 'aws-amplify/storage';

const client = generateClient<Schema>();

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, TimeAgoPipe],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {

  job: any;
  jobId: any;
  loggedInUser: any;
  jobApplication: any;
  jobApplications: any;

  constructor(private activatedRoute: ActivatedRoute, public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.jobId = params.get('id');
      this.fetchJobDetails();
    });
    this.loggedInUser = this.authService.userProfile;
  }

  fetchJobDetails() {
    client.models.Job.get({
      id: this.jobId
    }).then(job => {
      console.log(job);
      this.job = job.data;

      if (this.loggedInUser.type != 'COMPANY') {
        this.fetchJobApplication();
      } else {
        this.fetchJobApplications();
      }

      if (this.job.skills) {
        this.job.skills = this.job.skills.split(',');
      }

      console.log("Fetching profile for job: ", this.job.id);
      if (this.job.companyId) {
        client.models.CompnayProfile.list({
          filter: {
            userId: {
              eq: this.job.companyId
            }
          }
        }).then(profile => {
          console.log("Job profile: ", profile);
          this.job.companyProfile = profile.data[0];


          if (this.job.companyProfile && this.job.companyProfile.logo) {
            downloadData({
              path: this.job.companyProfile.logo,
            }).result.then(data => {
              data.body.text().then(blob => {
                // write to bytes
                // console.log(blob);
                this.job.companyProfile.logo = blob;
              })
            })
          }

        });
      }

    });
  }

  fetchJobApplication() {
    console.log("Fetching job application for job: ", this.job.id);
    client.models.JobApplications.list({
      filter: {
        jobId: {
          eq: this.job.id
        },
        userId: {
          eq: this.loggedInUser.id
        }
      }
    }).then(applications => {
      console.log("Job applications: ", applications);
      this.jobApplication = applications.data[0];
      console.log("Job application: ", this.jobApplication);
    });
  }

  fetchJobApplications() {
    console.log("Fetching job applications for job: ", this.job.id);
    client.models.JobApplications.list({
      filter: {
        jobId: {
          eq: this.job.id
        }
      }
    }).then(applications => {
      console.log("Job applications: ", applications);
      this.jobApplications = applications.data;
    });
  }

  applyJob() {
    console.log("Applying for job: ", this.job.id);
    client.models.JobApplications.create({
      jobId: this.job.id,
      userId: this.loggedInUser.id,
      companyId: this.job.companyId,
      status: "APPLIED",
    }).then(application => {
      console.log(application);
      this.router.navigate(['/myjobs']);
    });
  }

  editJob() {
    this.router.navigate(['/edit-job', this.job.id]);
  }

  deleteJob() {
    console.log("Deleting job: ", this.job.id);
    client.models.Job.delete({
      id: this.job.id
    }).then(job => {
      console.log(job);
      this.router.navigate(['/jobs']);
    });
  }

  viewApplications() {

  }

}
