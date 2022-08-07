import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'user', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
