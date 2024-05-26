import { ENTER, COMMA } from '@angular/cdk/keycodes';
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
import type { Schema } from '../../../amplify/data/resource';
import { AuthService } from '../services/auth.service';
import { generateClient } from 'aws-amplify/api';
import { Router } from '@angular/router';
import { downloadData, uploadData } from 'aws-amplify/storage';
import { LoadingInterceptorService } from '../loading-interceptor.service';
const client = generateClient<Schema>();

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

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

  profileId = '';
  existingFile: boolean = false;

  constructor(public authenticator: AuthenticatorService, private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private loadingService: LoadingInterceptorService) {
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
    this.loadingService.show();
    this.getUser();
  }


  getUser() {
    this.userDetails = this.authService.userProfile;
    if (!!this.userDetails) {
      this.isRecruiter = this.userDetails.type === 'COMPANY';
      if (this.isRecruiter) {
        client.models.CompnayProfile.list({
          filter: {
            userId: {
              eq: this.userDetails.id
            }
          }
        }).then(profile => {
          console.log(profile);
          if (profile && profile.data && profile.data.length > 0) {
            if (profile.data[0].id) {
              this.profileId = profile.data[0].id;
            }
            this.recruiterProfileForm.patchValue({
              name: profile.data[0].name,
              description: profile.data[0].description,
              industry: profile.data[0].industry,
              website: profile.data[0].website
            });
            if (profile.data[0].logo) {
              downloadData({
                path: profile.data[0].logo,
              }).result.then(data => {
                data.body.text().then(blob => {
                  // write to bytes
                  // console.log(blob);
                  this.previewUrl = blob;
                })
              })
            }

          }
        }).finally(() => {
          this.loadingService.hide();
        });
      } else {
        client.models.UserProfile.list({
          filter: {
            userId: {
              eq: this.userDetails.id
            }
          }
        }).then(profile => {
          console.log(profile);
          if (profile && profile.data && profile.data.length > 0) {
            if (profile.data[0].id) {
              this.profileId = profile.data[0].id;
            }
            if (profile.data[0].skills) {
              this.skills = profile.data[0].skills.split(',');
            }
            this.jobSeekerProfileForm.patchValue({
              name: profile.data[0].name,
              experience: profile.data[0].experience,
              education: profile.data[0].education,
              currentOrg: profile.data[0].currentOrg,
              currentRole: profile.data[0].currentRole,
              domain: profile.data[0].domain,
              city: profile.data[0].city,
              country: profile.data[0].country,
              expectedSalary: profile.data[0].expectedSalary,
              resume: profile.data[0].resume,
              website: profile.data[0].website,
              linkedin: profile.data[0].linkedin,
              github: profile.data[0].github,
            })
            if (profile.data[0].resume) {
              downloadData({
                path: profile.data[0].resume,
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

                  this.selectedFile = new File([blob], profile?.data[0]?.resumeFileName ? profile?.data[0]?.resumeFileName : 'resume', { type: data.contentType });
                  console.log(this.selectedFile);
                  const reader = new FileReader();
                  reader.onload = () => {
                    this.previewUrl = reader.result;
                  };
                  reader.readAsDataURL(this.selectedFile);
                  this.existingFile = true;
                })
              })
            }
          }
        }).finally(() => {
          this.loadingService.hide();
        });
      }
    }
  }

  async updateRecruiter() {

    console.log(this.recruiterProfileForm.value);

    if (!this.recruiterProfileForm.valid) {
      console.log('form invalid');
      return;
    }

    this.loadingService.show();

    let logoPath = '';

    if (!!this.previewUrl) {
      const result = await uploadData({
        data: this.previewUrl,
        path: `companyLogos/${this.authService?.userProfile?.id}`,
      }).result;
      console.log(result);
      logoPath = `companyLogos/${this.authService?.userProfile?.id}`
    }

    client.models.CompnayProfile.update({
      id: this.profileId,
      name: this.recruiterProfileForm.value.name,
      description: this.recruiterProfileForm.value.description,
      industry: this.recruiterProfileForm.value.industry,
      website: this.recruiterProfileForm.value.website,
      userId: this.authService.userProfile.id,
      logo: logoPath,
    }).then(profile => {
      console.log(profile);
      this.userProfile = profile;
      this.router.navigate(['/jobs']);
    }).finally(() => {
      this.loadingService.hide();
    });

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
      this.existingFile = false;
    }
  }

  onChooseAFile() {
    let el = document.getElementById('fileInput');
    if (el) {
      el.click();
    }
  }

  async updateJobSeeker() {
    console.log(this.jobSeekerProfileForm.value);

    if (!this.jobSeekerProfileForm.valid) {
      console.log('form invalid');
      return;
    }

    this.loadingService.show();

    let resumePath = null;

    if (!!this.previewUrl) {
      const result = await uploadData({
        data: this.previewUrl,
        path: `resumes/${this.authService?.userProfile?.id}`,
      }).result;
      console.log(result);
      resumePath = `resumes/${this.authService?.userProfile?.id}`
    }

    client.models.UserProfile.update({
      id: this.profileId,
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
      userId: this.authService?.userProfile?.id,
    }).then(profile => {
      console.log(profile);
      this.userProfile = profile;
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

  downloadFile() {
    if (!this.existingFile || !this.selectedFile) {
      return;
    }
    // Create a URL for the file
    const url = URL.createObjectURL(this.selectedFile);

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = this.selectedFile?.name;

    // Programmatically click the anchor element to trigger the download
    document.body.appendChild(a);
    a.click();

    // Clean up by removing the anchor element and revoking the blob URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

}
