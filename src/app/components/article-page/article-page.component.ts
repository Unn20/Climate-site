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

    constructor(public articleService: ArticleService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        articleService.getArticles().then(articles => {
            this.articles = articles;
        }).then(() => {
            this.setArticleToShowUsingUrl();
        });
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
            if (!this.articleToShow) {
                this.router.navigate(['**']);
            } else {
                const articlesWithoutCurrent = [...this.articles];
                articlesWithoutCurrent.splice(this.articles.indexOf(this.articleToShow), 1);
                this.latestArticles = articlesWithoutCurrent.slice(0, this.latestArticlesMaxCount);
            }
        });
    }

}
