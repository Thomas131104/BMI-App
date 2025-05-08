import { Component } from '@angular/core';
import { Person } from './model/person';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {

  height: number = 0;
  weight: number = 0;
  bmi: number = 0;
  type: string = "";
  isExist: boolean = false;

  calculateBMI()
  {
    const person = new Person(this.height, this.weight);

    this.isExist = person.isExist()
    this.bmi = Math.round(person.getBMI() * 10) / 10;
    this.type = person.getType()
  }
}
