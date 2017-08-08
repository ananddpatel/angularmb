import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: string;
  createPostRoute: string;
  posts;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.board = res.board);
    this.getPosts()
    this.createPostRoute = this.auth.getUser() ? '/b/'+this.board+'/create' : '/auth'
  }

  getPosts() {
    this.data.getPosts(this.board)
      // .subscribe(res => this.posts = res.data.posts, err=>console.log('board.component', err))
      .subscribe(
        res => this.posts = res.data.posts,
        err=> this.router.navigate(['/404'])
      )
  }

}
