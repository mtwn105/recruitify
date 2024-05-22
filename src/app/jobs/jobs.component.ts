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
const client = generateClient<Schema>();
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs: any[] = [];
  loggedInUser: any;

  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.getUser();
    this.fetchJobs();

  }
  getUser() {

    this.loggedInUser = this.authService.userProfile;

  }

  fetchJobs() {
    client.models.Job.list({
    }).then(jobs => {
      console.log(jobs);
      this.jobs = jobs.data;
    });
  }

  createJob() {
    this.router.navigate(['create-job']);
  }

}
