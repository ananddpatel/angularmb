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
    let route = this.base + '/b/' + board + '/create' + '?token=' + this.auth.getToken();
    return this.http.post(route, {title: title, body: body})
      .map(res=>res.json())
  }

  createBoard(board: string) {
    let route = this.base + '/create' + '?token=' + this.auth.getToken();
    return this.http.post(route, {name: board})
      .map(res=>res.json());
  }

  formatDate(date: string) {
    let d = new Date(date)
    return d.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  getPostData(postId: string) {
    let route = this.base + '/b/board/'+postId;
    return this.http.get(route)
      .map(res=>res.json())
  }

  postComment(postId: string, comment: string) {
    let route = this.base + '/' + postId + '/comment' + '?token=' + this.auth.getToken();
    return this.http.post(route, {body: comment})
      .map(res=> res.json())
  }


}
