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
import { LoadingInterceptorService } from '../loading-interceptor.service';

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

  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService, private loadingService: LoadingInterceptorService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.userProfile;
    console.log(JSON.stringify(this.application));
  }

  accept() {
    // console.log(this.application);
    this.loadingService.show();
    client.models.JobApplications.update({
      id: this.application.id,
      status: 'ACCEPTED'
    }).then((application) => {
      console.log(application);
      this.application.status = application.data?.status;
    }).finally(() => {
      this.loadingService.hide();
    });;
    // this.router.navigate(['/view-applications', this.application.jobId]);
  }

  reject() {
    // console.log(this.application);
    this.loadingService.show();
    client.models.JobApplications.update({
      id: this.application.id,
      status: 'REJECTED'
    }).then((application) => {
      console.log(application);
      this.application.status = application.data?.status;
    }).finally(() => {
      this.loadingService.hide();
    });;
  }

  downloadResume() {
    this.loadingService.show();
    downloadData({
      path: this.application?.userProfile?.resume,
    }).result.then(data => {
      data.body.text().then((text) => {
        // write to file
        const byteString = atob(text.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: data.contentType });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);

        link.download = this.application?.userProfile?.resumeFileName ? this.application?.userProfile?.resumeFileName : 'resume';

        link.click();



        // this.selectedFile = new File([blob], profile?.data[0]?.resumeFileName ? profile?.data[0]?.resumeFileName : 'resume', { type: data.contentType });
        // console.log(this.selectedFile);
        // const reader = new FileReader();
        // reader.onload = () => {
        //   this.previewUrl = reader.result;
        // };
        // reader.readAsDataURL(this.selectedFile);
        // this.existingFile = true;
      })
    }).finally(() => {
      this.loadingService.hide();
    });;
  }

  launchWebsite() {
    window.open(this.application?.userProfile?.website, '_blank');
  }
  launchGithub() {
    window.open(this.application?.userProfile?.github, '_blank');
  }
  launchLinkedin() {
    window.open(this.application?.userProfile?.linkedin, '_blank');
  }


}
