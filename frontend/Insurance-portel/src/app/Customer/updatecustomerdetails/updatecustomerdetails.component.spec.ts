import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecustomerdetailsComponent } from './updatecustomerdetails.component';

describe('UpdatecustomerdetailsComponent', () => {
  let component: UpdatecustomerdetailsComponent;
  let fixture: ComponentFixture<UpdatecustomerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecustomerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
