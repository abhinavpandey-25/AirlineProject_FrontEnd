import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightByIdComponent } from './flight-by-id.component';

describe('FlightByIdComponent', () => {
  let component: FlightByIdComponent;
  let fixture: ComponentFixture<FlightByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
