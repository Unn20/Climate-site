import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PollutionEffectsComponent} from './pollution-effects.component';

describe('PollutionEffectsComponent', () => {
    let component: PollutionEffectsComponent;
    let fixture: ComponentFixture<PollutionEffectsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PollutionEffectsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PollutionEffectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
