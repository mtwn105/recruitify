import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get user() {
    return !!localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null;
  }

  get isLoggedIn() {
    return !!localStorage.getItem('isLoggedIn') ? true : false;
  }


}
