import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth/auth.component';
import { MatToolbarModule } from '@angular/material/toolbar';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, AuthComponent, MatToolbarModule],
})
export class AppComponent {
  title = 'recruitify';
}
