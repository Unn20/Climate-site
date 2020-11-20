import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {ContentfulService} from './contentful.service';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private articles: Article[];
    private articlesPromise: Promise<any>;

    constructor(private contentfulService: ContentfulService) {
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
}
