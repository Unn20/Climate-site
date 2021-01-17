import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleListPageComponent} from './article-list-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('ArticleListPageComponent', () => {
    let component: ArticleListPageComponent;
    let fixture: ComponentFixture<ArticleListPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArticleListPageComponent],
            imports: [HttpClientTestingModule, RouterTestingModule, NoopAnimationsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
