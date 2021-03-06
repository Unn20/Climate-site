import {Injectable} from '@angular/core';
import {ContentfulClientApi, createClient, Entry} from 'contentful';
import {Article} from '../models/article';
import {ArticleContent} from '../models/article-content';
import {ArticleContentTypeEnum} from '../enums/article-content-type-enum';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContentfulService {

    private client: ContentfulClientApi;

    constructor() {
        this.client = createClient({
            space: environment.contentful.space,
            accessToken: environment.contentful.accessToken
        });
    }

    public getArticlesEntries(query?: object): Promise<Entry<any>[]> {
        return this.client.getEntries(Object.assign({
            content_type: 'news'
        }, query))
            .then(res => res.items);
    }

    public convertEntriesToArticlesList(entries: Entry<any>[]): Article[] {
        const articlesList = [];
        for (const entry of entries) {
            const article = new Article();
            article.title = entry.fields.title;
            article.mainImageUrl = entry.fields.mainImage.fields.file.url;
            article.dateAdded = entry.fields.dateAdded;
            article.id = entry.fields.articleId;
            article.articleContentList = [];
            for (const content of entry.fields.paragraphs.content) {
                switch (content.nodeType) {
                    case 'paragraph': {
                        article.articleContentList.push(
                            new ArticleContent(ArticleContentTypeEnum.TEXT, content.content[0].value)
                        );
                        break;
                    }
                    case 'heading-2': {
                        article.articleContentList.push(
                            new ArticleContent(ArticleContentTypeEnum.HEADER, content.content[0].value)
                        );
                        break;
                    }
                    case 'embedded-asset-block': {
                        article.articleContentList.push(
                            new ArticleContent(ArticleContentTypeEnum.IMAGE, content.data.target.fields.file.url)
                        );
                        break;
                    }
                }
            }
            articlesList.push(article);
        }
        return articlesList;
    }
}
