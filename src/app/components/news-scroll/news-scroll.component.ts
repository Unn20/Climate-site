import {AfterViewInit, Component, Renderer2, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {ScrollViewComponent} from '@progress/kendo-angular-scrollview';


@Component({
    selector: 'app-news-scroll',
    templateUrl: './news-scroll.component.html',
    styleUrls: ['./news-scroll.component.scss'],
})
export class NewsScrollComponent implements OnInit, OnDestroy {
    @ViewChild('myScroll') private myScrollView: ScrollViewComponent;
    public articles: Article[] = [];
    public width = '100%';
    public height = '800px';
    public maxHeight = 800;
    public minHeight = 200;
    public articleHover = false;
    public subscription = null;
    private readonly listenFunc: () => void;
    private lastWidth = 0;
    private lastHeight = 0;

    constructor(private renderer: Renderer2, public articleService: ArticleService) {
        articleService.getArticles().then(articles => {
            this.articles = articles;
        });
        this.lastHeight = window.innerHeight;
        this.lastWidth = window.innerWidth;
        this.updateHeight();
        this.listenFunc = renderer.listen('window', 'resize', () => this.updateHeight());
    }

    public updateHeight(): void {
        let widthChanged = false;
        if (this.lastWidth !== window.innerWidth){
            this.lastWidth = window.innerWidth;
            widthChanged = true;
        } else {
            this.lastHeight = window.innerHeight;
        }
        const width = window.innerWidth;
        if (widthChanged) {
            if (width < 1200) {
                if (this.maxHeight - (1200 - width) > 200) {
                    this.height = `${this.maxHeight - (1200 - width)}px`;
                } else {
                    this.height = `${this.minHeight}px`;
                }
            } else {
                this.height = `${this.maxHeight}px`;
            }
        } else {
            const heightDifference = window.innerHeight - +this.height.slice(0, -2);
            if (heightDifference < 70) {
                if (window.innerHeight > 200){
                    this.height = `${window.innerHeight - 70}px`;
                } else {
                    this.height = `${this.minHeight}px`;
                }
            } else {
                this.height = `${this.maxHeight}px`;
            }
        }
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
        this.listenFunc();
    }

}
