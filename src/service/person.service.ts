import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Initial Value'
  );
  data: Observable<any> = this.dataSource.asObservable();

  constructor() {}

  personData(data: any) {
    this.dataSource.next(data);
  }
}
