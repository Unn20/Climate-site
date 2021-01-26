import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageNotFoundComponent} from './page-not-found.component';
import {TranslateModule} from '@ngx-translate/core';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent],
            imports: [TranslateModule.forRoot()]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain error 404 message', () => {
        expect(component.error404Message).toBeTruthy();
    });

    it('should contain redirect link', () => {
        expect(component.redirectLink).toBeTruthy();
    });
});
