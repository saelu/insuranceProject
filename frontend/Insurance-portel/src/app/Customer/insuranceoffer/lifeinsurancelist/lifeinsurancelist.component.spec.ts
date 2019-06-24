import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeinsurancelistComponent } from './lifeinsurancelist.component';

describe('LifeinsurancelistComponent', () => {
  let component: LifeinsurancelistComponent;
  let fixture: ComponentFixture<LifeinsurancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeinsurancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeinsurancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
