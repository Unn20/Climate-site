import {Component} from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';


@Component({
    selector: 'app-news-scroll',
    templateUrl: './news-scroll.component.html',
    styleUrls: ['./news-scroll.component.scss']
})
export class NewsScrollComponent {
    public articles: Article[];
    public width = '100%';
    public height = '600px';
    public articleHover = false;

    constructor(public articleService: ArticleService) {
        articleService.getArticles().then(articles => {
            this.articles = articles;
        });
    }

}
