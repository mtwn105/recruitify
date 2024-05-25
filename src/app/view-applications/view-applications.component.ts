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
import { JobCardComponentComponent } from '../job-card-component/job-card-component.component';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { downloadData } from 'aws-amplify/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TimeAgoPipe } from '../time-ago.pipe';
import { ApplicationCardComponent } from '../application-card/application-card.component';

const client = generateClient<Schema>();

@Component({
  selector: 'app-view-applications',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, TimeAgoPipe, ApplicationCardComponent],
  templateUrl: './view-applications.component.html',
  styleUrl: './view-applications.component.css'
})
export class ViewApplicationsComponent {
  job: any;
  jobId: any;
  loggedInUser: any;
  jobApplications: any;

  constructor(private activatedRoute: ActivatedRoute, public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.jobId = params.get('id');
      this.fetchJobDetails();
      this.fetchJobApplications();
    });
    this.loggedInUser = this.authService.userProfile;
  }

  fetchJobDetails() {
    client.models.Job.get({
      id: this.jobId
    }).then(job => {
      console.log(job);
      this.job = job.data;

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

  fetchJobApplications() {

    console.log("Fetching job applications for job: ", this.jobId);
    client.models.JobApplications.list({
      filter: {
        jobId: {
          eq: this.jobId
        }
      }
    }).then(applications => {
      console.log("Job applications: ", applications);
      this.jobApplications = applications.data;
      for (let application of this.jobApplications) {
        console.log("Fetching profile for application: ", application);
        client.models.UserProfile.list({
          filter: {
            userId: {
              eq: application.userId
            }
          }
        }).then(profile => {
          console.log("Job application profile: ", profile);
          if (profile.data.length > 0) {
            application.userProfile = profile.data[0];
            application.userProfile.skills = application?.userProfile?.skills.split(',');
          }
          // application.userProfile = profile.data;
        });
        client.models.User.get({
          id: application.userId
        }).then(profile => {
          console.log("Job application user: ", profile);
          application.user = profile.data;
        });

      }
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
