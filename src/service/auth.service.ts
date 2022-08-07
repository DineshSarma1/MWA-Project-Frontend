import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn() {
    const loginData = JSON.stringify(localStorage.getItem('userToken'));
    if (loginData) {
      //   const dateNow = new Date();
      //   // loginData.expires_in
      // const expireDate = new Date();
      // if (expireDate >= dateNow) {
      //   return !!localStorage.getItem('token');
      // }
      // else {
      //   this.removeToken();
      //   return false;
      // }
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    let loginData = JSON.stringify(localStorage.getItem('userToken'));
    loginData =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJlZGRiMTFhNmZiY2I3MTZjOTliMDU4IiwiZnVsbG5hbWUiOiJBbndhciIsImVtYWlsIjoiYW53YXJAbWl1LmVkdSIsImlhdCI6MTY1OTgxMTQxN30.WWPfgGefl9kAM8XOHELggB3PFzRAoZWsrDMt3R_XRWk';
    if (loginData) {
      return loginData;
    } else {
      return loginData;
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }
}