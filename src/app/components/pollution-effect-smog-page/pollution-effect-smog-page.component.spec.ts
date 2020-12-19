import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionEffectSmogPageComponent } from './pollution-effect-smog-page.component';

describe('PollutionEffectSmogPageComponent', () => {
  let component: PollutionEffectSmogPageComponent;
  let fixture: ComponentFixture<PollutionEffectSmogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutionEffectSmogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionEffectSmogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
