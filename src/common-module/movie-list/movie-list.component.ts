import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any = [];
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: CommonService
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
        //this.router.navigate([this.returnUrl]);
      },
      (error) => {}
    );
  }

  onDetails(movie: any) {
    this.router.navigateByUrl('/movie-details', { state: { movie: movie } });
  }
}
