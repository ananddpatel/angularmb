import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  board: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.board = res.board);
  }

  createPost(form: NgForm) {
    this.data.createPost(this.board, form.value.title, form.value.body)
      .subscribe(res => {
        console.log(res.statusText);
        this.router.navigate(['/b/'+this.board])
      })
  }

}
