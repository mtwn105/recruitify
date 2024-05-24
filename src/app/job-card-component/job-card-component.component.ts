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

@Component({
  selector: 'app-job-card-component',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSliderModule, MatChipsModule, MatIconModule, TimeAgoPipe],
  templateUrl: './job-card-component.component.html',
  styleUrl: './job-card-component.component.css'
})
export class JobCardComponentComponent {
  @Input() job: any;
  @Input() jobApplication: any;
  loggedInUser: any;

  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.userProfile;
  }

  loadJobDetails() {
    this.router.navigate(['/job-details', this.job.id]);
  }

}
