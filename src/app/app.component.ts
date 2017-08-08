import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'AngularMB';
  apiRoute: string = 'https://ng-mb-backend.herokuapp.com/api';
}
