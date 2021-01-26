import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeathsCounterComponent} from './deaths-counter.component';
import {TranslateModule} from '@ngx-translate/core';

describe('DeathsCounterComponent', () => {
    let component: DeathsCounterComponent;
    let fixture: ComponentFixture<DeathsCounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DeathsCounterComponent],
            imports: [TranslateModule.forRoot()]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeathsCounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
