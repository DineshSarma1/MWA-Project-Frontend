import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../service/data.service';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any = [];
  typeList: string[] = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Drama',
    'Family',
    'Fantasy',
    'Film-Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Thriller',
    'War',
    'Western',
  ];
  errorMessage = '';
  // rating = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: CommonService,
    private dataService: DataService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
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

  openDialogForRating(movieId: any, title: string) {
    let email = localStorage.getItem('user_email');
    if (email == null || email == '' || email == undefined) {
      this.router.navigateByUrl('/auth/login');
      return;
    }
    const dialogRef = this.dialog.open(MovieRatingComponent, {
      width: '500px',
      data: {
        movieId: movieId,
        title: title,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getRating(rating: any) {
    let output = 0;
    for (let i = 0; i < rating.length; i++) {
      output += rating[i].rating_point;
    }
    return output / rating.length;
  }

  dropdownOnChange(type: string) {
    debugger;
    this.api.getData(environment.movieByMovieType + type).subscribe(
      (res) => {
        console.log(res);
        if (!res.success) {
          this.openSnackBar('Movie not found for ' + type, 'Not Found!');
        } else {
          this.movies = res.payload;
        }
      },
      (error) => {}
    );
  }

  openSnackBar(message: string, status: string) {
    this._snackBar.open(message, status, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
