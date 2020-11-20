import {Component, OnInit} from '@angular/core';
import { FigureComponent } from './figure/figure.component';

@Component({
    selector: 'app-figures',
    templateUrl: './figures.component.html',
    styleUrls: ['./figures.component.scss']
})
export class FiguresComponent implements OnInit {
    figures: string[] = ['temp', 'co2', 'methane', 'nitrous', 'arctic'];
    constructor() {
    }

    ngOnInit(): void {
    }

}
