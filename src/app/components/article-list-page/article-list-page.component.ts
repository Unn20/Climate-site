import {AfterViewChecked, Component, HostListener} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';

@Component({
    selector: 'app-article-list-page',
    templateUrl: './article-list-page.component.html',
    styleUrls: ['./article-list-page.component.scss']
})
export class ArticleListPageComponent implements AfterViewChecked {
    public articles: Article[];
    private showMoreArticlesStep = 4;
    private showingArticlesCount;

    constructor(public articleService: ArticleService) {
        this.showingArticlesCount = 0;
        articleService.getArticles().then(articles => {
            this.articles = articles.sort((a, b) => {
                const dateA = new Date(a.dateAdded);
                const dateB = new Date(b.dateAdded);
                return (dateA < dateB) ? 1 : -1;
            });
            this.showMoreArticles();
        });
    }

    ngAfterViewChecked(): void {
        this.setPageHeight();
    }

    @HostListener('window:resize', ['$event'])
    public setPageHeight(): void {
        let totalHeight = 0;
        for (let i = 0; i < this.showingArticlesCount; i++) {
            if (Array.from(document.getElementsByClassName('article'))[i]) {
                totalHeight += Array.from(document.getElementsByClassName('article'))[i].clientHeight;
            }
        }
        if (totalHeight >= parseInt(document.getElementById('articles').style.height.slice(0, -2), 10)) {
            document.getElementById('articles').style.height = (totalHeight).toString() + 'px';
        } else {
            document.getElementById('articles').style.transition = 'initial';
            document.getElementById('articles').style.height = (totalHeight).toString() + 'px';
            document.getElementById('articles').style.transition = 'height 1.2s ease-out';
        }
    }

    public showMoreArticles(): void {
        this.showingArticlesCount += this.showMoreArticlesStep;
        this.setPageHeight();
    }

    public areMoreArticlesHidden(): boolean {
        if (!this.articles) {
            return false;
        } else {
            return this.showingArticlesCount < this.articles.length;
        }
    }
}
