import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { ActorComponent } from './actor/actor.component';
import { MatSliderModule } from '@angular/material/slider';
import { DirectorComponent } from './director/director.component';
import { WriterComponent } from './writer/writer.component';

@NgModule({
  declarations: [
    MovieTypeComponent,
    ActorComponent,
    DirectorComponent,
    WriterComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MatSliderModule
  ]
})
export class AdminModuleModule { }
