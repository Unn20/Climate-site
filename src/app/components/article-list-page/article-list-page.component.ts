import {AfterViewInit, Component} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';

@Component({
    selector: 'app-article-list-page',
    templateUrl: './article-list-page.component.html',
    styleUrls: ['./article-list-page.component.scss']
})
export class ArticleListPageComponent implements AfterViewInit {
    public articles: Article[];
    private showMoreArticlesStep = 4;
    private showingArticlesCount;
    private singleArticleHeight = 250;

    constructor(public articleService: ArticleService) {
        this.showingArticlesCount = 0;
        articleService.getArticles().then(articles => {
            this.articles = articles.sort((a, b) => {
                const dateA = new Date(a.dateAdded);
                const dateB = new Date(b.dateAdded);
                return (dateA < dateB) ? 1 : 0;
            });
            this.showMoreArticles();
        });
    }

    ngAfterViewInit(): void {
        Array.from(document.getElementsByClassName('article')).forEach((article: HTMLElement) => {
            article.style.height = this.singleArticleHeight + 'px';
        });
    }

    public showMoreArticles(): void {
        this.showingArticlesCount += this.showMoreArticlesStep;
        document.getElementById('articles')
            .style.height = (Math.min(this.showingArticlesCount, this.articles.length) * this.singleArticleHeight).toString() + 'px';
    }

    public areMoreArticlesHidden(): boolean {
        if (!this.articles) {
            return false;
        } else {
            return this.showingArticlesCount < this.articles.length;
        }
    }
}
