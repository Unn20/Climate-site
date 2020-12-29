import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmingPageComponent } from './warming-page.component';

describe('PollutionEffectWarmingPageComponent', () => {
  let component: WarmingPageComponent;
  let fixture: ComponentFixture<WarmingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
