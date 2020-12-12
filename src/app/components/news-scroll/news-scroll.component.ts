import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {ScrollViewComponent} from '@progress/kendo-angular-scrollview';


@Component({
    selector: 'app-news-scroll',
    templateUrl: './news-scroll.component.html',
    styleUrls: ['./news-scroll.component.scss']
})
export class NewsScrollComponent implements OnInit, OnDestroy {
    @ViewChild('myScroll') private myScrollView: ScrollViewComponent;
    public articles: Article[] = [];
    public width = '100%';
    public height = '600px';
    public articleHover = false;
    public subscription = null;

    constructor(public articleService: ArticleService) {
        articleService.getArticles().then(articles => {
            this.articles = articles;
        });
    }

    private next_article(): void {
        const source = interval(5000);
        this.subscription = source.subscribe(_ => {
            console.log(this.myScrollView.activeIndex);
            if (this.myScrollView.activeIndex + 1 === this.articles.length) {
                this.myScrollView.pageChange(0);
            } else {
                this.myScrollView.next();
            }
        });
    }

    ngOnInit(): void{
        this.next_article();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
