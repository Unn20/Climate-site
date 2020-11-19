import {Component, Input} from '@angular/core';
import {ContentfulService} from '../../services/contentful.service';
import {Article} from '../../models/article';
import {ArticleContentTypeEnum} from '../../enums/article-content-type-enum';
import {ArticleService} from '../../services/article.service';

@Component({
    selector: 'app-article-page',
    templateUrl: './article-page.component.html',
    styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent {
    public latestArticles: Article[];
    public articleToShow: Article;
    private latestArticlesMaxCount = 3;
    private articleToShowId = 1;

    constructor(private articleService: ArticleService,
                private contentfulService: ContentfulService) {
        this.contentfulService.getArticlesEntries()
            .then(entries => {
                const articles = this.contentfulService.convertEntriesToArticlesList(entries);
                this.articleService.articles = articles.sort((a, b) => a.id - b.id).reverse();
                this.latestArticles = articles.slice(0, this.latestArticlesMaxCount);
                this.setArticleToShow(this.articleToShowId);
                console.log(this.latestArticles);
            });
    }

    public setArticleToShow(articleId: number): void {
        this.articleToShow = this.articleService.articles.find(article => article.id === articleId);
        window.scrollTo(0, 0);
    }

    public isContentTypeHeader(contentType: ArticleContentTypeEnum): boolean {
        return contentType === ArticleContentTypeEnum.HEADER;
    }

    public isContentTypeText(contentType: ArticleContentTypeEnum): boolean {
        return contentType === ArticleContentTypeEnum.TEXT;
    }

    public isContentTypeImage(contentType: ArticleContentTypeEnum): boolean {
        return contentType === ArticleContentTypeEnum.IMAGE;
    }

}
