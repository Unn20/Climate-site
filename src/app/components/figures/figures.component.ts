import {Component, OnInit} from '@angular/core';
import {FigureComponent} from './figure/figure.component';
import {FigureTypeEnum} from '../../enums/figure-type-enums';

@Component({
    selector: 'app-figures',
    templateUrl: './figures.component.html',
    styleUrls: ['./figures.component.scss']
})
export class FiguresComponent implements OnInit {
    public figures: FigureTypeEnum[] = [FigureTypeEnum.TEMPERATURE_ANOMALIES,
        FigureTypeEnum.CARBON_DIOXIDE_LEVEL,
        FigureTypeEnum.METHANE_LEVEL,
        FigureTypeEnum.NITROUS_OXIDE_LEVEL,
        FigureTypeEnum.ARCTIC_ICE_MELTING];

    constructor() {
    }

    ngOnInit(): void {
    }

}
