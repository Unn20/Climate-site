import {Component, OnInit} from '@angular/core';
import {FigureTypeEnum} from '../../../enums/figure-type-enums';

@Component({
    selector: 'app-pollution-effect-warming-page',
    templateUrl: './warming-page.component.html',
    styleUrls: ['./warming-page.component.scss']
})
export class WarmingPageComponent implements OnInit {
    public figureTemperature: FigureTypeEnum = FigureTypeEnum.TEMPERATURE_ANOMALIES;
    public figureArctic: FigureTypeEnum = FigureTypeEnum.ARCTIC_ICE_MELTING;

    constructor() {
    }

    ngOnInit(): void {
    }

}
