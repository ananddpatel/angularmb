import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(form.value.username, form.value.password)
      .subscribe(
        res=>console.log('user logged in'), //res =  token data
        err=>this.message = "Invalid Username and/or Password."
      )
  }

}
