import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css'],
})
export class MovieRatingComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private api: CommonService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public movieInfo: any
  ) {}

  ngOnInit(): void {
    console.log(this.movieInfo);
  }

  ratingSelect(rating: number) {
    let data = {
      // movie_id: this.movieInfo.movieId,
      user_email: localStorage.getItem('user_email'),
      rating_point: rating,
    };
    console.log(data);
    this.api
      .putData(environment.movieRating + '/' + this.movieInfo.movieId, data)
      .subscribe(
        (res) => {
          console.log(res);
          this.openSnackBar(res.message);
        },
        (error) => {}
      );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, status, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }
}
