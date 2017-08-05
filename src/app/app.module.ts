import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRouter } from "./app.routes";
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouter
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
