import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalFreeCalculatorService {

  constructor() { }
  calculate(){
    return 2.99;
  }
}
