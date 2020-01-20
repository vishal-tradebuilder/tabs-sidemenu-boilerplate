import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
    return true;
  }
  getToken(){
    if(localStorage.getItem('LoggedInUser')){
      return true;
    } else {
      return false;
    }
  }
  clearToken(){
    localStorage.removeItem('LoggedInUser');
  }

}
