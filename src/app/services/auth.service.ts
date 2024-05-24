import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get user() {
    return !!localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null;
  }

  get userProfile() {
    return !!localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile') as string) : null;
  }

  get isLoggedIn() {
    return !!localStorage.getItem('isLoggedIn') ? true : false;
  }

  setUser(user: any) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(user));
  }

  setUserProfile(user: any) {
    console.log("Setting user profile", user);
    localStorage.setItem('userProfile', JSON.stringify(user));
  }

  signOut() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('userProfile');
  }

  get isRecruiter() {
    return !!this.userProfile ? this.userProfile.type == 'COMPANY' : false;
  }


}
