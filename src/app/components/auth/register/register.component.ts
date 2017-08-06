import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.authService.register(form.value.username, form.value.password, form.value.password_confirmation)
      .subscribe( // sub to an observable
        res=>{console.log('user registered')},
        err =>this.message = "Invalid Username/Password"
      );
  }
}
