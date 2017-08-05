import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  app :AppComponent;

  constructor(app: AppComponent) {
    this.app = app;
  }

  ngOnInit() {
  }

}
