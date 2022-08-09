import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';

import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any = [];
  errorMessage = '';
  // rating = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: CommonService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getMoveList();
  }

  getMoveList() {
    this.api.getData(environment.movie).subscribe(
      (res) => {
        console.log(res);
        if (!res.success) {
          this.errorMessage = res.message;
        } else {
          this.movies = res.payload;
        }
      },
      (error) => {}
    );
  }

  onDetails(movie: any) {
    this.dataService.movieData(movie);
    this.router.navigateByUrl('common/movie-details');
  }

  countRating(d: number) {
    // return (this.rating += d);
  }
}
