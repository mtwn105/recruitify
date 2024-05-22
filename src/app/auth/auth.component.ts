import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import config from '../../../amplify_outputs.json'
import { confirmSignIn, fetchAuthSession } from 'aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule, CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {


  constructor(public authenticator: AuthenticatorService, private router: Router, private authService: AuthService) {
    Amplify.configure(config);
  }

  ngOnInit() {

    this.authenticator.subscribe((data) => {
      // console.log(data);
      if (data.authStatus === 'authenticated' && !this.authService.isLoggedIn) {
        this.authService.setUser(data.user);
        this.router.navigate(['create-profile']);
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

}
