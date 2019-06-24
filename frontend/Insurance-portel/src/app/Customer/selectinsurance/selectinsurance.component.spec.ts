import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectinsuranceComponent } from './selectinsurance.component';

describe('SelectinsuranceComponent', () => {
  let component: SelectinsuranceComponent;
  let fixture: ComponentFixture<SelectinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
