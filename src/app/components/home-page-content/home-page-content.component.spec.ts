import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageContentComponent} from './home-page-content.component';
import {TranslateModule} from '@ngx-translate/core';

describe('HomePageContentComponent', () => {
    let component: HomePageContentComponent;
    let fixture: ComponentFixture<HomePageContentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomePageContentComponent],
            imports: [TranslateModule.forRoot()]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
