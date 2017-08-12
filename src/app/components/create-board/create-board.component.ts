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
  message: string;

  constructor(
  	private data: DataService,
  	private router: Router
  ) { }

  ngOnInit() {
  }
  
  validateBoardName(board: string) {
    return board.split(' ').length === 1
  }

  createBoard(form: NgForm) {
    let board = form.value.board
    
    if (!this.validateBoardName(board)) {
      this.message = "Error: select a single word Board name or Board already exists."
    } else {
      this.data.createBoard(board)
        .subscribe(
          res=>this.router.navigate(['/b/'+board]),
          err=>this.message = "Error: select a single word Board name or Board already exists."
        )
    }
  }

}
