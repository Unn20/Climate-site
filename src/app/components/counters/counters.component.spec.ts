import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountersComponent} from './counters.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('CountersComponent', () => {
    let component: CountersComponent;
    let fixture: ComponentFixture<CountersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CountersComponent],
            imports: [HttpClientTestingModule, TranslateModule.forRoot()]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CountersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
