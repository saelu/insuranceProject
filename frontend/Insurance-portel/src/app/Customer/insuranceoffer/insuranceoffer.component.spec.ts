import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceofferComponent } from './insuranceoffer.component';

describe('InsuranceofferComponent', () => {
  let component: InsuranceofferComponent;
  let fixture: ComponentFixture<InsuranceofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
