import { Component } from '@angular/core';
import { BmiService } from '../home/services/bmi.service';


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

  constructor(private BmiService: BmiService) {}

  calculateBMI() {
    const { bmi, type, isValid } = this.BmiService.calculateBMI(this.height, this.weight);
    this.bmi = bmi;
    this.type = type;
    this.isExist = isValid;
  }
}
