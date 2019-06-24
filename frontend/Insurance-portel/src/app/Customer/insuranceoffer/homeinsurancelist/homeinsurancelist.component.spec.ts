import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinsurancelistComponent } from './homeinsurancelist.component';

describe('HomeinsurancelistComponent', () => {
  let component: HomeinsurancelistComponent;
  let fixture: ComponentFixture<HomeinsurancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeinsurancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeinsurancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
