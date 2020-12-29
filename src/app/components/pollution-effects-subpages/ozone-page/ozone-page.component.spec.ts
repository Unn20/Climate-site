import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzonePageComponent } from './ozone-page.component';

describe('PollutionEffectOzonePageComponent', () => {
  let component: OzonePageComponent;
  let fixture: ComponentFixture<OzonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OzonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
