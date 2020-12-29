import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionEffectWarmingPageComponent } from './pollution-effect-warming-page.component';

describe('PollutionEffectWarmingPageComponent', () => {
  let component: PollutionEffectWarmingPageComponent;
  let fixture: ComponentFixture<PollutionEffectWarmingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutionEffectWarmingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionEffectWarmingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
