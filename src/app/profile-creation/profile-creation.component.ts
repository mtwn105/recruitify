import { auth } from './../../../amplify/auth/resource';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/data';
import { uploadData } from "aws-amplify/storage";
import type { Schema } from '../../../amplify/data/resource';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
const client = generateClient<Schema>();


@Component({
  selector: 'app-profile-creation',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule],
  templateUrl: './profile-creation.component.html',
  styleUrl: './profile-creation.component.css'
})
export class ProfileCreationComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: string[] = [];

  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  userDetails: any;
  userProfile: any;

  newUser: boolean = true;
  currentStep = 1;
  isRecruiter = false;

  logoUrl = '';

  recruiterProfileForm: FormGroup;
  jobSeekerProfileForm: FormGroup;

  constructor(public authenticator: AuthenticatorService, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.recruiterProfileForm = this.formBuilder.group({
      image: this.formBuilder.control(''),
      name: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      industry: this.formBuilder.control('', [Validators.required]),
      website: this.formBuilder.control('', [Validators.required, Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')])
    })
    this.jobSeekerProfileForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      phone: this.formBuilder.control(''),
      experience: this.formBuilder.control(0, [Validators.required]),
      education: this.formBuilder.control(''),
      currentOrg: this.formBuilder.control(''),
      currentRole: this.formBuilder.control(''),
      domain: this.formBuilder.control(''),
      skills: this.formBuilder.control(''),
      city: this.formBuilder.control(''),
      country: this.formBuilder.control(''),
      expectedSalary: this.formBuilder.control(0),
      resume: this.formBuilder.control(''),
      website: this.formBuilder.control(''),
      linkedin: this.formBuilder.control(''),
      github: this.formBuilder.control(''),
    })
  }

  ngOnInit() {
    this.getUser();
  }


  getUser() {

    client.models.User.list({
      filter: {
        username: {
          eq: this.authService.user.username
        }
      },
    }).then(user => {
      console.log(user);
      if (!user || !user.data || !user.data.length) {
        // Create user
        this.newUser = true;
      } else {
        this.userDetails = user.data[0];
        console.log("User", user.data[0]);
        this.authService.setUserProfile(user.data[0]);
        this.newUser = false;
        // fetch user profile
        if (this.userDetails.type == 'COMPANY') {
          this.isRecruiter = true;
          client.models.CompnayProfile.list({
            filter: {
              userId: {
                eq: this.userDetails.id
              }
            },
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
            },
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

  createRecruiter() {

    console.log(this.recruiterProfileForm.value);

    if (!this.recruiterProfileForm.valid) {
      console.log('form invalid');
      return;
    }

    client.models.User.create({
      name: this.recruiterProfileForm.value.name,
      type: 'COMPANY',
      username: this.authService.user.username,
      email: this.authService.user.signInDetails.loginId,
    }).then(async user => {
      console.log(user);

      this.userDetails = user;
      this.authService.setUserProfile(user.data);

      let logoPath = null;

      if (!!this.previewUrl) {
        const result = await uploadData({
          data: this.previewUrl,
          path: `companyLogos/${user.data?.id}`,
        }).result;
        console.log(result);
        logoPath = `companyLogos/${user.data?.id}`
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
        this.router.navigate(['/jobs']);
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

  createJobSeeker() {
    console.log(this.jobSeekerProfileForm.value);

    if (!this.jobSeekerProfileForm.valid) {
      console.log('form invalid');
      return;
    }

    client.models.User.create({
      name: this.jobSeekerProfileForm.value.name,
      type: 'INDIVIDUAL',
      username: this.authService.user.username,
      email: this.authService.user.signInDetails.loginId,
    }).then(async user => {
      console.log(user);
      this.userDetails = user;
      this.authService.setUserProfile(user.data);
      let resumePath = null;

      if (!!this.previewUrl) {
        const result = await uploadData({
          data: this.previewUrl,
          path: `resumes/${user.data?.id}`,
        }).result;
        console.log(result);
        resumePath = `resumes/${user.data?.id}`
      }

      client.models.UserProfile.create({
        name: this.jobSeekerProfileForm.value.name,
        experience: this.jobSeekerProfileForm.value.experience,
        education: this.jobSeekerProfileForm.value.education,
        currentOrg: this.jobSeekerProfileForm.value.currentOrg,
        currentRole: this.jobSeekerProfileForm.value.currentRole,
        domain: this.jobSeekerProfileForm.value.domain,
        skills: this.skills.join(','),
        city: this.jobSeekerProfileForm.value.city,
        country: this.jobSeekerProfileForm.value.country,
        expectedSalary: this.jobSeekerProfileForm.value.expectedSalary,
        resume: resumePath,
        resumeFileName: this.selectedFile?.name,
        website: this.jobSeekerProfileForm.value.website,
        linkedin: this.jobSeekerProfileForm.value.linkedin,
        github: this.jobSeekerProfileForm.value.github,
        userId: user.data?.id,
      }).then(profile => {
        console.log(profile);
        this.userProfile = profile;
        this.router.navigate(['/jobs']);
      });

    })

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
