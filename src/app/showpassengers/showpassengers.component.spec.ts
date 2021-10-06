import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpassengersComponent } from './showpassengers.component';

describe('ShowpassengersComponent', () => {
  let component: ShowpassengersComponent;
  let fixture: ComponentFixture<ShowpassengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpassengersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
