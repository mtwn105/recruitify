import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import type { Schema } from '../../../amplify/data/resource';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { generateClient } from 'aws-amplify/data';
import { uploadData, getUrl } from "aws-amplify/storage";

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const client = generateClient<Schema>();


@Component({
  selector: 'app-profile-creation',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule],
  templateUrl: './profile-creation.component.html',
  styleUrl: './profile-creation.component.css'
})
export class ProfileCreationComponent {

  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  loggedInUser: any;
  userDetails: any;
  userProfile: any;

  newUser: boolean = true;
  currentStep = 1;
  isRecruiter = false;

  logoUrl = '';

  recruiterProfileForm: FormGroup;

  constructor(public authenticator: AuthenticatorService, private router: Router, private formBuilder: FormBuilder) {
    this.recruiterProfileForm = this.formBuilder.group({
      image: this.formBuilder.control(''),
      name: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      industry: this.formBuilder.control('', [Validators.required]),
      website: this.formBuilder.control('', [Validators.required, Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')])
    })
  }

  ngOnInit() {

    this.authenticator.subscribe((data) => {
      console.log(data);
      if (data.authStatus === 'authenticated') {
        this.loggedInUser = data.user;
        console.log(this.loggedInUser);
        this.getUser();
      }
    });

  }


  getUser() {

    if (this.loggedInUser) {
      client.models.User.list({
        filter: {
          username: {
            eq: this.loggedInUser.username
          }
        }
      }).then(user => {
        // this.userDetails = user;
        console.log(user);
        if (!user || !user.data || !user.data.length) {
          // this.router.navigate(['create-profile']);
          // Create user
          this.newUser = true;
        } else {
          this.userDetails = user.data[0];
          this.newUser = false;
          // this.currentStep = 2;
          // fetch user profile
          if (this.userDetails.type == 'COMPANY') {
            this.isRecruiter = true;
            client.models.CompnayProfile.list({
              filter: {
                userId: {
                  eq: this.userDetails.id
                }
              }
            }).then(userProfile => {
              console.log(userProfile);

              if (!userProfile || !userProfile.data || !userProfile.data.length) {
                this.currentStep = 2;
              } else {
                this.currentStep = 3;
                // navigate to next step
                this.router.navigate(['/jobs']);
              }
            });
          } else {
            client.models.UserProfile.list({
              filter: {
                userId: {
                  eq: this.userDetails.id
                }
              }
            }).then(userProfile => {
              console.log(userProfile);
              // this.userProfile = userProfile.data[0];
              // console.log(this.userProfile);
              if (!userProfile || !userProfile.data || !userProfile.data.length) {
                this.currentStep = 2;
              } else {
                this.currentStep = 3;
                // navigate to next step
                this.router.navigate(['/jobs']);
              }
            });
          }
        }
        // this.userProfile = user.profile;
        // console.log(this.userProfile);
      });
    }

  }

  createRecruiter() {

    console.log(this.recruiterProfileForm.value);

    if (!this.recruiterProfileForm.valid) {
      console.log('form invalid');
      return;
    }

    client.models.User.create({
      name: this.recruiterProfileForm.value.name,
      type: 'COMPANY',
      username: this.loggedInUser.username,
      email: this.loggedInUser.signInDetails.loginId,
    }).then(user => {
      console.log(user);
      // this.router.navigate(['create-profile']);

      this.userDetails = user;

      // try {

      let logoPath = null;

      if (!!this.previewUrl) {
        uploadData({
          data: this.previewUrl,
          path: `companyLogos/${user.data?.id}`,
        }).result.then(result => {
          console.log(result);
          logoPath = `companyLogos/${user.data?.id}`
        });
      }

      client.models.CompnayProfile.create({
        name: this.recruiterProfileForm.value.name,
        description: this.recruiterProfileForm.value.description,
        industry: this.recruiterProfileForm.value.industry,
        website: this.recruiterProfileForm.value.website,
        userId: user.data?.id,
        logo: logoPath,
      }).then(profile => {
        console.log(profile);
        this.userProfile = profile;
        // this.router.navigate(['create-profile']);
      });

    })

  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onChooseAFile() {
    let el = document.getElementById('fileInput');
    if (el) {
      el.click();
    }
  }

}
