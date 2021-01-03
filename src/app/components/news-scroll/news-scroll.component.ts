import {AfterViewInit, Component, Renderer2, OnDestroy, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import {interval, Observable, Subject, Subscribable, Subscription, timer} from 'rxjs';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {ScrollViewComponent} from '@progress/kendo-angular-scrollview';
import {startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-news-scroll',
    templateUrl: './news-scroll.component.html',
    styleUrls: ['./news-scroll.component.scss'],
})
export class NewsScrollComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('myScroll') private myScrollView: ScrollViewComponent;
    public articles: Article[] = [];
    public width = '100%';
    public height = '800px';
    public arrows = true;
    public maxHeight = 800;
    public minHeight = 200;
    public articleHover = false;
    private lastWidth = 0;
    private lastHeight = 0;
    public autoScrollingSubscription: Subscription;
    private readonly heightListener: () => void;
    private scrollListener: () => void;
    private scrollTimer: Observable<any>;
    private resetTimer = new Subject();
    private freshPage = true;

    constructor(private renderer: Renderer2, public articleService: ArticleService) {
        articleService.getArticles().then(articles => {
            this.articles = articles.sort( (a, b) => {return a.id - b.id;} );
        });
        this.lastHeight = window.innerHeight;
        this.lastWidth = window.innerWidth;
        this.maxHeight = Math.round( 0.65 * screen.height);
        this.height = `${this.maxHeight}px`;
        this.minHeight = Math.round(2 * this.maxHeight / 8);
        this.updateHeight();
        this.heightListener = renderer.listen('window', 'resize', () => this.updateHeight());
        this.scrollTimer = this.resetTimer.pipe(
            startWith( 0),
            switchMap(() => timer(5000, 5000))
        );
    }

    private updateHeight(): void {
        if (screen.width < 650) {
            this.height = `${Math.round(6 * this.maxHeight / 8)}px`;
            if (screen.width < 500){
                this.height = `${Math.round(4 * this.maxHeight / 8)}px`;
                if (screen.width < 400){
                    this.height = `${Math.round(3 * this.maxHeight / 8)}px`;
                }
            }
        } else {
            let widthChanged = false;
            if (this.lastWidth !== window.innerWidth){
                this.lastWidth = window.innerWidth;
                widthChanged = true;
            } else {
                this.lastHeight = window.innerHeight;
            }
            const width = window.innerWidth;
            const screenWidthRatio = Math.round(0.7 * screen.width);
            if (this.freshPage || widthChanged) {
                this.freshPage = false;
                if (width < screenWidthRatio) {
                    if (this.maxHeight - (screenWidthRatio - width) > this.minHeight) {
                        this.height = `${this.maxHeight - (screenWidthRatio - width)}px`;
                    } else {
                        this.height = `${this.minHeight}px`;
                    }
                } else {
                        this.height = `${this.maxHeight}px`;
                }
            } else {
                if (window.innerWidth >= screenWidthRatio){
                    const heightDifference = window.innerHeight - +this.height.slice(0, -2);
                    if (heightDifference < 70) {
                        if (window.innerHeight > this.minHeight){
                            this.height = `${window.innerHeight - 70}px`;
                        } else {
                            this.height = `${this.minHeight}px`;
                        }
                    } else {
                        this.height = `${this.maxHeight}px`;
                    }
                }
            }
        }
    }

    private next_article(): void {
        this.autoScrollingSubscription = this.scrollTimer.subscribe(_ => {
            if (this.myScrollView.activeIndex + 1 === this.articles.length) {
                this.myScrollView.pageChange(0);
            } else {
                this.myScrollView.next();
            }
        });
    }

    public refreshScrollTimer(event): void {
        this.resetTimer.next(void 0);  // true
    }

    ngOnInit(): void {
        this.next_article();
    }

    ngOnDestroy(): void {
        if (this.autoScrollingSubscription) {
            this.autoScrollingSubscription.unsubscribe();
        }
        if (this.heightListener) {
            this.heightListener();
        }
        if (this.scrollListener) {
            this.scrollListener();
        }
    }

    ngAfterViewInit(): void {
        for(let i = 0; i < this.articles.length; i++) {
            this.myScrollView.next();
        }
        this.myScrollView.pageChange(0);
        this.myScrollView.endless = true;
        this.updateHeight();
    }

}
