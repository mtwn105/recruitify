import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { TimeAgoPipe } from '../time-ago.pipe';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { downloadData } from 'aws-amplify/storage';

const client = generateClient<Schema>();
@Component({
  selector: 'app-application-card',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, TimeAgoPipe],
  templateUrl: './application-card.component.html',
  styleUrl: './application-card.component.css'
})
export class ApplicationCardComponent {

  @Input() application: any;
  loggedInUser: any;
  skills: any;

  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.userProfile;
    console.log(JSON.stringify(this.application));
  }

  accept() {
    // console.log(this.application);
    client.models.JobApplications.update({
      id: this.application.id,
      status: 'ACCEPTED'
    }).then((application) => {
      console.log(application);
      this.application.status = application.data?.status;
    });
    // this.router.navigate(['/view-applications', this.application.jobId]);
  }

  reject() {
    // console.log(this.application);
    client.models.JobApplications.update({
      id: this.application.id,
      status: 'REJECTED'
    }).then((application) => {
      console.log(application);
      this.application.status = application.data?.status;
    });
  }



}
