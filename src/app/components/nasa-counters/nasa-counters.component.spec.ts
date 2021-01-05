import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaCountersComponent } from './nasa-counters.component';

describe('NasaCountersComponent', () => {
  let component: NasaCountersComponent;
  let fixture: ComponentFixture<NasaCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
