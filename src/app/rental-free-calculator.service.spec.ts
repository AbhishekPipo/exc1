import { TestBed } from '@angular/core/testing';

import { RentalFreeCalculatorService } from './rental-free-calculator.service';

describe('RentalFreeCalculatorService', () => {
  let service: RentalFreeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalFreeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
