import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  base: string;

  constructor(private http: Http) {
    this.base = 'http://localhost:8000/api';
  }

  register(username: string, password: string, passwordConfirmation: string) {
    const credentials = {
      name: username,
      password: password,
      password_confirmation: passwordConfirmation
    }
    // returns an observable
    return this.http.post(this.base + '/register', credentials)
      .map(res=>{console.log(res.status, res.statusText)})
  }

  login(username: string, password: string) {
    const credentials = {
      name: username,
      password: password,
    }
    // const generateTokenData = this.generateTokenData;
    return this.http.post(this.base + '/login', credentials)
      // decoded the base64 jwt
      .map(res => {return this.generateTokenData(res.json().data.token)})
      // token data object that we just returned from .map() and store it 
      .do(tokenData=>localStorage.setItem('ngmb', tokenData.token))
  }

  // creates token object of decoded and coded token
  generateTokenData(token: string) {
    const base64url = token.split('.')[1]
    const base64 = base64url.replace('-', '+').replace('_', '/')
    // return original token and decoded token
    return {
      token: token,
      decoded: JSON.parse(window.atob(base64))
    }
  }

}