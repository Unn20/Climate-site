import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionEffectOzonePageComponent } from './pollution-effect-ozone-page.component';

describe('PollutionEffectOzonePageComponent', () => {
  let component: PollutionEffectOzonePageComponent;
  let fixture: ComponentFixture<PollutionEffectOzonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutionEffectOzonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionEffectOzonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
