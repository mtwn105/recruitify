import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import config from '../../../amplify_outputs.json'

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(config);
  }

  ngOnInit() {
    console.log(this.authenticator.user.signInDetails)
  }

}
