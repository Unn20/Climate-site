import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticlesScrollComponent} from './articles-scroll.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ArticlesScrollComponent', () => {
    let component: ArticlesScrollComponent;
    let fixture: ComponentFixture<ArticlesScrollComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArticlesScrollComponent],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticlesScrollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
