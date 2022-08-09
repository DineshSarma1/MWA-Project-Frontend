import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  data: Observable<any> = this.dataSource.asObservable();

  constructor() {}

  movieData(data: any) {
    this.dataSource.next(data);
  }
}
