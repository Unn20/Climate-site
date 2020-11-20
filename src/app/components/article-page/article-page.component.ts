import {Component} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleContentTypeEnum} from '../../enums/article-content-type-enum';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-article-page',
    templateUrl: './article-page.component.html',
    styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent {
    public latestArticles: Article[];
    public articleToShow: Article;
    private articles: Article[];
    private latestArticlesMaxCount = 3;

    constructor(private articleService: ArticleService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        articleService.getArticles().then(articles => {
            this.articles = articles;
            this.latestArticles = articles.slice(0, this.latestArticlesMaxCount);
        }).then(() => {
            this.setArticleToShowUsingUrl();
        });
    }

    public redirectToArticle(articleId: number): void {
        window.scrollTo(0, 0);
        this.router.navigate(['/article/' + articleId]);
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

    private setArticleToShowUsingUrl(): void {
        this.activatedRoute.params.subscribe(event => {
            const articleToShowId = parseInt(event.articleId, 10);
            this.articleToShow = this.articles.find(article => article.id === articleToShowId);
            console.log(this.articleToShow);
            if (!this.articleToShow) {
                this.router.navigate(['/home']);
            }
        });
    }

}
