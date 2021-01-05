import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PollutionEffectsDigestComponent} from './pollution-effects-digest.component';

describe('PollutionEffectsComponent', () => {
    let component: PollutionEffectsDigestComponent;
    let fixture: ComponentFixture<PollutionEffectsDigestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PollutionEffectsDigestComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PollutionEffectsDigestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
