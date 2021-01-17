import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GlobalWarmingPageComponent} from './global-warming-page.component';

describe('PollutionEffectWarmingPageComponent', () => {
    let component: GlobalWarmingPageComponent;
    let fixture: ComponentFixture<GlobalWarmingPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GlobalWarmingPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GlobalWarmingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
