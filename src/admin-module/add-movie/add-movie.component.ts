import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CommonService } from 'src/service/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  myForm: any;
  errorMessage: string = '';
  movieTypeList: string[] = [
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

  WriterData = [{ name: '', born_date: '', born_place: '', contact: '' }];
  get writers(): FormArray {
    return this.myForm.get('writers') as FormArray;
  }

  actorData = [{ name: '', born_date: '', born_place: '', contact: '' }];
  get actors(): FormArray {
    return this.myForm.get('actors') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: CommonService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: '',
      length: '',
      release_date: '',
      movie_type: '',
      description: '',
      image: '',
      video: '',
      director: this.formBuilder.group({
        name: '',
        born_date: '',
        born_place: '',
        contact: '',
      }),
      writers: this.formBuilder.array(
        this.WriterData.map((c) => this.formBuilder.group(c))
      ),
      actors: this.formBuilder.array(
        this.actorData.map((c) => this.formBuilder.group(c))
      ),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.api.postData(environment.movie, form.value).subscribe(
      (res) => {
        console.log(res);
        if (!res.success) {
          this.errorMessage = res.message;
        } else {
          this.router.navigate(['/common']);
        }
      },
      (error) => {
        //this.alertService.error(error);
        // this.loading = false;
      }
    );
  }

  addWriterField() {
    this.writers.push(
      this.formBuilder.group({
        name: '',
        born_date: '',
        born_place: '',
        contact: '',
      })
    );
  }

  removeWritersField(index: number): void {
    if (this.writers.length > 1) this.writers.removeAt(index);
    else
      this.writers.patchValue([
        { name: '', born_date: '', born_place: '', contact: '' },
      ]);
  }

  addActorField() {
    this.actors.push(
      this.formBuilder.group({
        name: '',
        born_date: '',
        born_place: '',
        contact: '',
      })
    );
  }

  removeActorField(index: number): void {
    if (this.actors.length > 1) this.actors.removeAt(index);
    else
      this.actors.patchValue([
        { name: '', born_date: '', born_place: '', contact: '' },
      ]);
  }
}
