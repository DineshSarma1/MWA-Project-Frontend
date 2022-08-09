import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/service/person.service';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  person: any;
  constructor(public personService: PersonService) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.personService.data.subscribe((res) => {
      console.log(res);
      this.person = res;
    });
  }
}
