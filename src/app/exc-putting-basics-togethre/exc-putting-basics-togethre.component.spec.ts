import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcPuttingBasicsTogethreComponent } from './exc-putting-basics-togethre.component';

describe('ExcPuttingBasicsTogethreComponent', () => {
  let component: ExcPuttingBasicsTogethreComponent;
  let fixture: ComponentFixture<ExcPuttingBasicsTogethreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcPuttingBasicsTogethreComponent]
    });
    fixture = TestBed.createComponent(ExcPuttingBasicsTogethreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
