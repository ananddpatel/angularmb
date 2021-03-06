import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Post } from "../../models/Post";
import { Comment } from "../../models/Comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: string;
  post: Post;
  comments: Comment[];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.id = res.id);
    this.getPostData()
  }

  getPostData() {
    this.data.getPostData(this.id)
      .subscribe(res => {
        this.post = res.data.post;
        this.comments = res.data.comments
      })
  }

  postComment(form: NgForm) {
    let comment = form.value.comment;
    this.data.postComment(this.id, comment)
      .subscribe(res => {
        console.log('Comment Posted');
        this.getPostData();
      })
  }

}
