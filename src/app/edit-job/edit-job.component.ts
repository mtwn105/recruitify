import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { TimeAgoPipe } from '../time-ago.pipe';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { downloadData } from 'aws-amplify/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoadingInterceptorService } from '../loading-interceptor.service';

const client = generateClient<Schema>();

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, TimeAgoPipe, MatSlideToggleModule],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent {
  job: any;
  jobId: any;
  loggedInUser: any;

  addOnBlur = true;
  updateJobForm: FormGroup;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: string[] = [];

  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private loadingService: LoadingInterceptorService) {

    this.updateJobForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      domain: this.formBuilder.control('',),
      description: this.formBuilder.control('', [Validators.required]),
      salary: this.formBuilder.control(1,),
      minExperience: this.formBuilder.control(1),
      city: this.formBuilder.control('', [Validators.required]),
      country: this.formBuilder.control('', [Validators.required]),
      isRemote: this.formBuilder.control(false),
    })

  }


  ngOnInit() {
    this.loadingService.show();
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

      this.updateJobForm.patchValue({
        title: this.job.title,
        domain: this.job.domain,
        description: this.job.description,
        salary: this.job.salary,
        minExperience: this.job.minExperience,
        city: this.job.city,
        country: this.job.country,
        isRemote: this.job.isRemote,
      })

      if (this.job.skills) {
        this.skills = this.job.skills.split(',');
      }

      // console.log("Fetching profile for job: ", this.job.id);
      // if (this.job.companyId) {
      //   client.models.CompnayProfile.list({
      //     filter: {
      //       userId: {
      //         eq: this.job.companyId
      //       }
      //     }
      //   }).then(profile => {
      //     console.log("Job profile: ", profile);
      //     this.job.companyProfile = profile.data[0];


      //     if (this.job.companyProfile && this.job.companyProfile.logo) {
      //       downloadData({
      //         path: this.job.companyProfile.logo,
      //       }).result.then(data => {
      //         data.body.text().then(blob => {
      //           // write to bytes
      //           // console.log(blob);
      //           this.job.companyProfile.logo = blob;
      //         })
      //       })
      //     }

      //   });
      // }

    }).finally(() => {
      this.loadingService.hide();
    });
  }




  formatExperience(value: number): string {
    return value + 'yrs';
  }
  formatSalary(value: number): string {
    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.skills.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeSkill(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  updateJob() {
    console.log(this.updateJobForm.value);

    if (!this.updateJobForm.valid) {
      console.log('form invalid');
      return;
    }

    this.loadingService.show();

    client.models.Job.update({
      id: this.job.id,
      title: this.updateJobForm.value.title,
      companyId: this.authService.userProfile.id,
      skills: this.skills.join(','),
      domain: this.updateJobForm.value.domain,
      minExperience: this.updateJobForm.value.minExperience,
      salary: this.updateJobForm.value.salary,
      city: this.updateJobForm.value.city,
      country: this.updateJobForm.value.country,
      isRemote: this.updateJobForm.value.isRemote,
      description: this.updateJobForm.value.description,
    }).then(job => {
      console.log(job);
      this.router.navigate(['/job-details', this.job.id]);
    }).finally(() => {
      this.loadingService.hide();
    });

  }

}
