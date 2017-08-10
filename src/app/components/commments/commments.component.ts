import { Component, OnInit, Input } from '@angular/core';
import { Comment } from "../../models/Comment";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-commments',
  templateUrl: './commments.component.html',
  styleUrls: ['./commments.component.css']
})
export class CommmentsComponent implements OnInit {
  @Input() comments: Comment[]

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
