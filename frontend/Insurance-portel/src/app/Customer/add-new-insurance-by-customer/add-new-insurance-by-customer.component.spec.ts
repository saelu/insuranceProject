import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInsuranceByCustomerComponent } from './add-new-insurance-by-customer.component';

describe('AddNewInsuranceByCustomerComponent', () => {
  let component: AddNewInsuranceByCustomerComponent;
  let fixture: ComponentFixture<AddNewInsuranceByCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewInsuranceByCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewInsuranceByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
