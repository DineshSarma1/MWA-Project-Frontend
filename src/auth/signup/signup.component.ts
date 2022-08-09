import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hide = true;
  myForm: any;
  errorMessage: string = '';
  isVaildUser: boolean = true;
  interestList: string[] = [
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
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: CommonService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      dbo: '',
      interests: '',
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    if (form.valid) {
      let data = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        dbo: form.value.password,
        interests: form.value.interests,
        authType: 'User',
      };
      this.api.postData(environment.registration, data).subscribe(
        (res) => {
          if (!res.success) {
            this.errorMessage = res.message;
            this.isVaildUser = res.success;
          } else {
            localStorage.setItem('userToken', res.payload);
            this.router.navigate(['/common']);
          }
        },
        (error) => {
          //this.alertService.error(error);
          // this.loading = false;
        }
      );
    }
  }
}
