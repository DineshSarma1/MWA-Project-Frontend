import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from 'src/_helpers/auth.guard';
const routes: Routes = [
  { path: 'add-movie', component: AddMovieComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModuleRoutingModule {}
