import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../services/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  isLoggingIn: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.isLoggingIn = true
    this.message = "Logging in..."
    this.authService.login(form.value.username, form.value.password)
      .subscribe(
        res=>{
          this.isLoggingIn = false
          // console.log('user logged in')
          this.router.navigate(['/'])
        }, //res =  token data
        err=>{
          this.message = "Invalid Username and/or Password."
          this.isLoggingIn = false
        }
      )
  }

}
