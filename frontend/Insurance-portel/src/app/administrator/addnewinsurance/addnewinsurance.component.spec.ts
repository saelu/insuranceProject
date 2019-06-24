import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewinsuranceComponent } from './addnewinsurance.component';

describe('AddnewinsuranceComponent', () => {
  let component: AddnewinsuranceComponent;
  let fixture: ComponentFixture<AddnewinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
