import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticlePageComponent} from './article-page.component';
import {ArticleContentTypeEnum} from '../../enums/article-content-type-enum';
import {RouterTestingModule} from '@angular/router/testing';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

describe('ArticlePageComponent', () => {
    let component: ArticlePageComponent;
    let fixture: ComponentFixture<ArticlePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArticlePageComponent],
            imports: [RouterTestingModule.withRoutes([
                { path: '**', component: PageNotFoundComponent}
            ])]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticlePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should detect article content type as header', () => {
        const contentType = ArticleContentTypeEnum.HEADER;
        expect(component.isContentTypeHeader(contentType)).toBeTrue();
    });

    it('should detect article content type as different than header', () => {
        const contentTypeText = ArticleContentTypeEnum.TEXT;
        expect(component.isContentTypeHeader(contentTypeText)).toBeFalse();
        const contentTypeImage = ArticleContentTypeEnum.IMAGE;
        expect(component.isContentTypeHeader(contentTypeImage)).toBeFalse();
    });

    it('should detect article content type as text', () => {
        const contentType = ArticleContentTypeEnum.TEXT;
        expect(component.isContentTypeText(contentType)).toBeTrue();
    });

    it('should detect article content type as different than text', () => {
        const contentTypeText = ArticleContentTypeEnum.HEADER;
        expect(component.isContentTypeText(contentTypeText)).toBeFalse();
        const contentTypeImage = ArticleContentTypeEnum.IMAGE;
        expect(component.isContentTypeText(contentTypeImage)).toBeFalse();
    });

    it('should detect article content type as image', () => {
        const contentType = ArticleContentTypeEnum.IMAGE;
        expect(component.isContentTypeImage(contentType)).toBeTrue();
    });

    it('should detect article content type as different than image', () => {
        const contentTypeText = ArticleContentTypeEnum.HEADER;
        expect(component.isContentTypeImage(contentTypeText)).toBeFalse();
        const contentTypeImage = ArticleContentTypeEnum.TEXT;
        expect(component.isContentTypeImage(contentTypeImage)).toBeFalse();
    });
});
