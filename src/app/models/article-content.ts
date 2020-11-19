import {ArticleContentTypeEnum} from '../enums/article-content-type-enum';

export class ArticleContent {
    public contentType: ArticleContentTypeEnum;
    public value: string;

    constructor(contentType: ArticleContentTypeEnum, value: string) {
        this.contentType = contentType;
        this.value = value;
    }
}
