import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'b/:board', component: BoardComponent},
  {path: 'create', component: CreateBoardComponent},
  {path: 'b/:board/create', component: CreatePostComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouter { }