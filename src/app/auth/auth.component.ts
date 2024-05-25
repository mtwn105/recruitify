import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import config from '../../../amplify_outputs.json'
import { confirmSignIn, fetchAuthSession } from 'aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';
import { AuthService } from '../services/auth.service';
const client = generateClient<Schema>();
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule, CommonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {


  constructor(public authenticator: AuthenticatorService, public router: Router, public authService: AuthService, public activatedRoute: ActivatedRoute) {
    Amplify.configure(config);
  }

  ngOnInit() {

    this.authenticator.subscribe((data) => {
      // console.log(data);
      if (data.authStatus === 'authenticated' && !this.authService.isLoggedIn) {
        this.authService.setUser(data.user);
        client.models.User.list({
          filter: {
            username: {
              eq: data.user.username
            }
          }
        }).then((user) => {
          console.log("Logged In User", user);
          if (!user || !user.data || !user.data.length) {
            this.router.navigate(['create-profile']);
          } else {
            this.authService.setUserProfile(user.data[0]);
            this.router.navigate(['jobs']);
          }
        })
      }
    });

    // console.log(this.authenticator.username)

    // Hub.listen('auth', (data) => {
    //   const { payload } = data;
    //   if (payload.event === 'signedIn') {
    //     this.router.navigate(['create-profile']);
    //   }
    // });

    // Auth.currentAuthenticatedUser()
    //   .then(user => {
    //     this.router.navigate(['profile']);
    //   })
    //   .catch(() => {
    //     this.router.navigate(['']);
    //   });
  }

  getUser() {
    // fetchAuthSession().then((session) => {
    //   console.log(session);

    // })
  }

  signOutAndGoHome(signOut: any) {
    signOut();
    this.authService.signOut();
    this.router.navigate(['/']);
  }

  goToMyJobPostings() {
    this.router.navigate(['/myjobs']);
  }
  goToJobPostings() {
    this.router.navigate(['/jobs']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

}
