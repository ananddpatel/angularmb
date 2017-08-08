import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AuthService } from "./auth.service";
import { AppComponent } from '../app.component'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  base: string;

  constructor(private http: Http, private auth: AuthService) {
    this.base = new AppComponent().apiRoute;
  }

  getPosts(board: string) {
    return this.http.get(this.base + '/b/' + board)
      .map(res => res.json())
  }

  createPost(board: string, title: string, body: string) {
    const route = this.base + '/b/' + board + '/create' + '?token=' + this.auth.getToken();
    return this.http.post(route, {title: title, body: body})
      .map(res=>res.json())
  }

}
