import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';

const routes: Routes = [
  { path: 'movie-type', component: MovieTypeComponent },
  { path: 'movie-actor', component: ActorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
