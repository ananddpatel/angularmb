import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  constructor(
  	private data: DataService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  createBoard(form: NgForm) {
  	let board = form.value.board
  	this.data.createBoard(board)
  	  .subscribe(res=>{
  	  	console.log('create-board.component.ts @ createBoard', res)
  	  	this.router.navigate(['/b/'+board])
  	  })
  }

}
