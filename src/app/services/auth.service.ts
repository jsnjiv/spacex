import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = localStorage.getItem('spacex_user_data');


  constructor(private http: HttpClient, private router: Router) {
  }

  removeUser(){
    localStorage.removeItem('spacex_user_data');
  }

  setUserData(data){
    console.log(data)
    localStorage.setItem('spacex_user_data', JSON.stringify(data));
  }

  isAuthenticatedUser() {
    if (this.userData && this.userData != "") {
      return true
    } else return false;
  }

}
