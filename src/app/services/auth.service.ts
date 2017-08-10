import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AppComponent } from '../app.component'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  base: string;
  private user: {id: number, name: string};

  constructor(private http: Http) {
    this.base = new AppComponent().apiRoute;
    this.checkReLoginReq()
  }
  
  checkReLoginReq() {
    if (localStorage.getItem('ngmb.user') && !this.checkTokenExpired(localStorage.getItem('ngmb'))) {
      this.user = JSON.parse(localStorage.getItem('ngmb.user'));
    } else {
      this.logout()
    }
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
      .map(res => {
        const resJSON = res.json()
        localStorage.setItem('ngmb.user', JSON.stringify(resJSON.data.user));
        this.user = resJSON.data.user
        return this.generateTokenData(resJSON.data.token)
      })
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

  checkTokenExpired(token: string) {
    const tokenData = this.generateTokenData(token)
    // checks time in seconds
    return (new Date).getTime() / 1000 >= tokenData.decoded.exp
  }

  logout() {
    localStorage.clear();
    this.user = undefined;
  }

  getUser() {
    return this.user;
  }

  getToken() {
    return localStorage.getItem('ngmb');
  }

}