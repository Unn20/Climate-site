import {Component, OnInit} from '@angular/core';
import { FigureComponent } from './figure/figure.component';

@Component({
    selector: 'app-figures',
    templateUrl: './figures.component.html',
    styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {
    figures = ['1', '2', '3', '4'];
    constructor() {
    }

    ngOnInit(): void {
    }

}
