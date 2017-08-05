import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  base: string;

  constructor(private http: Http) {
    this.base = 'http://localhost:8000/api';
  }

  register(name: string, password: string, passwordConfirmation: string) {
    const credentials = {
      name: name,
      password: password,
      password_confirmation: passwordConfirmation
    }
    return this.http.post(this.base + '/register', credentials).map(res=>console.log(res));
  }

}
