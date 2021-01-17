import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FigureComponent} from './figure.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FigureComponent', () => {
    let component: FigureComponent;
    let fixture: ComponentFixture<FigureComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FigureComponent],
            imports: [HttpClientTestingModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FigureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
