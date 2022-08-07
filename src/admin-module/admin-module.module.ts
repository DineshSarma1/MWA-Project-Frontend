import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';

@NgModule({
  declarations: [AddMovieComponent, UserListComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModuleModule {}
