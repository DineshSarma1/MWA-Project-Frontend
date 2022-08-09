import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from '../../service/data.service';
import { PersonService } from 'src/service/person.service';
import { PersonDetailsComponent } from '../person-details/person-details.component';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  constructor(
    private router: Router,
    private dataService: DataService,
    public dialog: MatDialog,
    public personService: PersonService
  ) {}

  ngOnInit(): void {
    this.getMovie();
    debugger;
    if (this.movie == '') {
      this.router.navigateByUrl('/common');
    }
  }

  getMovie() {
    this.dataService.data.subscribe((response) => {
      this.movie = response;
    });
  }

  openDialog(person: any, type: string) {
    person.personType = type;
    this.personService.personData(person);
    const dialogRef = this.dialog.open(PersonDetailsComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
