import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  constructor() { }

  calculateBMI(height: number, weight: number): { bmi: number, type: string, isValid: boolean } {
    const person = new Person(height, weight);
    const isValid = person.isValid();
    const bmi = isValid ? person.getBMI() : 0;
    const type = isValid ? person.getType() : "Invalid data";
    return { bmi, type, isValid };
  }
}
