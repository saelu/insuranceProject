import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminatorLoginComponent } from './adminator-login.component';

describe('AdminatorLoginComponent', () => {
  let component: AdminatorLoginComponent;
  let fixture: ComponentFixture<AdminatorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminatorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminatorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
