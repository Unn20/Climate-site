import {Component, OnInit} from '@angular/core';
import {FigureTypeEnum} from '../../../enums/figure-type-enums';

@Component({
    selector: 'app-pollution-effect-warming-page',
    templateUrl: './global-warming-page.component.html',
    styleUrls: ['../pollution-effect-page.scss', './global-warming-page.component.scss']
})
export class GlobalWarmingPageComponent implements OnInit {
    public figureTemperature: FigureTypeEnum = FigureTypeEnum.TEMPERATURE_ANOMALIES;
    public figureArctic: FigureTypeEnum = FigureTypeEnum.ARCTIC_ICE_MELTING;
    public figureCarbon: FigureTypeEnum = FigureTypeEnum.CARBON_DIOXIDE_LEVEL;
    public figureMethane: FigureTypeEnum = FigureTypeEnum.METHANE_LEVEL;
    public figureNitrous: FigureTypeEnum = FigureTypeEnum.NITROUS_OXIDE_LEVEL;

    constructor() {
    }

    ngOnInit(): void {
    }

}
