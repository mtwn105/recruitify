import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { AuthService } from '../services/auth.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { LoadingInterceptorService } from '../loading-interceptor.service';

const client = generateClient<Schema>();
@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent {
  addOnBlur = true;
  loggedInUser: any;
  createJobForm: FormGroup;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: string[] = [];

  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private loadingService: LoadingInterceptorService) {

    this.createJobForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      domain: this.formBuilder.control('',),
      description: this.formBuilder.control('', [Validators.required]),
      salary: this.formBuilder.control(1,),
      minExperience: this.formBuilder.control(1),
      city: this.formBuilder.control('', [Validators.required]),
      country: this.formBuilder.control('', [Validators.required]),
      isRemote: this.formBuilder.control(false,),
    })

  }

  ngOnInit() {

    this.getUser();

  }
  getUser() {

    this.loggedInUser = this.authService.userProfile;

  }

  createJob() {
    console.log(this.createJobForm.value);

    if (!this.createJobForm.valid) {
      console.log('form invalid');
      return;
    }

    this.loadingService.show();
    client.models.Job.create({
      title: this.createJobForm.value.title,
      companyId: this.authService.userProfile.id,
      skills: this.skills.join(','),
      domain: this.createJobForm.value.domain,
      minExperience: this.createJobForm.value.minExperience,
      salary: this.createJobForm.value.salary,
      city: this.createJobForm.value.city,
      country: this.createJobForm.value.country,
      isRemote: this.createJobForm.value.isRemote,
      description: this.createJobForm.value.description,
    }).then(job => {
      console.log(job);

      client.mutations.sendJobNotification({
        jobId: job.data?.id,
        companyId: job.data?.companyId
      }).then((job) => {
        console.log(job)
      })

      this.router.navigate(['/jobs']);
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

}
