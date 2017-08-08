import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../app.component";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  app: AppComponent;
  collapsed: boolean;

  constructor(app: AppComponent, private auth: AuthService) {
    this.app = app;
  }

  ngOnInit() {
    this.collapsed = true;
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }

  logout() {
    this.auth.logout()
  }

}
