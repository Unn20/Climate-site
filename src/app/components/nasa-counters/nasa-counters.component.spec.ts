import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NasaCountersComponent} from './nasa-counters.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('NasaCountersComponent', () => {
    let component: NasaCountersComponent;
    let fixture: ComponentFixture<NasaCountersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NasaCountersComponent],
            imports: [HttpClientTestingModule, TranslateModule.forRoot()]
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
