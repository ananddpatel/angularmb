import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AuthService } from "./services/auth.service";
import { DataService } from "./services/data.service";

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRouter } from "./app.routes";
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BoardComponent } from './components/board/board.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    BoardComponent,
    PostComponent,
    CommentComponent,
    NotfoundComponent,
    CreatePostComponent,
    CreateBoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouter
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
