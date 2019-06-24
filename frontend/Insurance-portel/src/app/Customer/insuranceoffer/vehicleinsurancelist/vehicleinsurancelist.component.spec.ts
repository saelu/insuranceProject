import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleinsurancelistComponent } from './vehicleinsurancelist.component';

describe('VehicleinsurancelistComponent', () => {
  let component: VehicleinsurancelistComponent;
  let fixture: ComponentFixture<VehicleinsurancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleinsurancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleinsurancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
