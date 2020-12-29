import {Component, OnInit} from '@angular/core';
import {FigureTypeEnum} from '../../../enums/figure-type-enums';

@Component({
    selector: 'app-pollution-effect-smog-page',
    templateUrl: './smog-page.component.html',
    styleUrls: ['./smog-page.component.scss']
})
export class SmogPageComponent implements OnInit {
    public figureCarbon: FigureTypeEnum = FigureTypeEnum.CARBON_DIOXIDE_LEVEL;
    public figureMethane: FigureTypeEnum = FigureTypeEnum.METHANE_LEVEL;
    public figureNitrous: FigureTypeEnum = FigureTypeEnum.NITROUS_OXIDE_LEVEL;

    constructor() {
    }

    ngOnInit(): void {
    }

}
