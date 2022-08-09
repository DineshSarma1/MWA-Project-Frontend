import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared/material.module';
import { CommonModuleRoutingModule } from './common-module-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SafePipe } from 'src/__pipe/SafePipe';
@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    PersonDetailsComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    CommonModuleRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class CommonModuleModule {}
