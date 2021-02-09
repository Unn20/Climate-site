import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SourcesPageComponent} from './sources-page.component';
import {TranslateModule} from '@ngx-translate/core';

describe('SourcesPageComponent', () => {
    let component: SourcesPageComponent;
    let fixture: ComponentFixture<SourcesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SourcesPageComponent],
            imports: [TranslateModule.forRoot()]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SourcesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
