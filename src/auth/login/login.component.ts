import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  myForm: any;
  // returnUrl: string = '';
  errorMessage: string = '';
  isVaildUser: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: CommonService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: '',
      password: '',
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    if (form.valid) {
      let data = {
        email: form.value.email,
        password: form.value.password,
      };

      // this.loading = true;
      this.api
        .postData(environment.login, data)
        .pipe(first())
        .subscribe(
          (res) => {
            console.log(res);
            if (!res.success) {
              this.errorMessage = res.message;
              this.isVaildUser = res.success;
            } else {
              console.log(res);
              localStorage.setItem('userToken', res.payload);
              // this.headerComponent.isLogin = true;
              this.router.navigate(['/common']);
            }
            //this.router.navigate([this.returnUrl]);
          },
          (error) => {
            //this.alertService.error(error);
            // this.loading = false;
          }
        );
    }
  }
}
