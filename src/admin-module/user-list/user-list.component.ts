import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: any = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private api: CommonService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.api.getData(environment.user).subscribe(
      (res) => {
        console.log(res);
        if (!res.success) {
          // this.errorMessage = res.message;
        } else {
          this.userList = res.payload;
          this.openSnackBar(res.message, 'Success!');
        }
      },
      (error) => {}
    );
  }

  openSnackBar(message: string, status: string) {
    this._snackBar.open(message, status, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }
}
