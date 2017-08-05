import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    const myForm = form
    console.log(myForm);
    // return false;
    this.authService.register(form.value.name, form.value.password, form.value.password_confirmation)
      .subscribe(res=>console.log(res), err => console.log(err));

  }

}
