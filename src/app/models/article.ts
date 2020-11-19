import {ArticleContent} from './article-content';

export class Article {
    public title: string;
    public mainImageUrl: string;
    public id: number;
    public dateAdded: string;
    public articleContentList: ArticleContent[];
}
