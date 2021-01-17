import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticlesScrollComponent} from './articles-scroll.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ScrollViewComponent, ScrollViewModule} from '@progress/kendo-angular-scrollview';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ArticlesScrollComponent', () => {
    let component: ArticlesScrollComponent;
    let fixture: ComponentFixture<ArticlesScrollComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArticlesScrollComponent],
            imports: [RouterTestingModule, ScrollViewModule, BrowserAnimationsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticlesScrollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
