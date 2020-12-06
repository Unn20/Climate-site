import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {ContentfulService} from './contentful.service';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private articles: Article[];
    private articlesPromise: Promise<any>;

    constructor(private contentfulService: ContentfulService,
                private router: Router) {
        this.articlesPromise = this.contentfulService.getArticlesEntries().then(entries => {
            const articles = this.contentfulService.convertEntriesToArticlesList(entries);
            this.articles = articles.sort((a, b) => a.id - b.id).reverse();
        });
    }

    public getArticles(): Promise<Article[]> {
        return this.articlesPromise.then(() => {
            return this.articles;
        });
    }

    public redirectToArticle(articleId: number): void {
        window.scrollTo(0, 0);
        this.router.navigate(['/article/' + articleId]);
    }
}
