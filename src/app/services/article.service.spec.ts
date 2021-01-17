import {TestBed} from '@angular/core/testing';

import {ArticleService} from './article.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ArticleService', () => {
    let service: ArticleService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule]
        });
        service = TestBed.inject(ArticleService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
