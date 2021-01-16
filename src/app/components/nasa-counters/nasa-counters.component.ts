import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NasaCountersService} from '../../services/nasa-counters.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-nasa-counters',
  templateUrl: './nasa-counters.component.html',
  styleUrls: ['./nasa-counters.component.scss']
})
export class NasaCountersComponent implements OnInit, AfterViewInit {
    subscription: Subscription;
    nasaCountersData = [];
    counterNameMapping = {
        'Sea Level': 'nasa-counters.name.sea-level',
        'Ice Sheets': 'nasa-counters.name.ice-sheets',
        'Global Temperature': 'nasa-counters.name.global-temperature',
        'Carbon Dioxide': 'nasa-counters.name.carbon-dioxide',
        'Arctic Ice Minimum': 'nasa-counters.name.arctic-ice-minimum',
    };
    counterDirMapping = {
        up: 'nasa-counters.dir.up',  // wzrost
        down: 'nasa-counters.dir.down'  // spadek
    };
    counterUnitMapping = {
        'Sea Level': 'nasa-counters.unit.millimeters-per-year',
        'Ice Sheets': 'nasa-counters.unit.billion-metric-tons-per-year',
        'Global Temperature': 'nasa-counters.unit.since-1880',
        'Arctic Ice Minimum': 'nasa-counters.unit.percent-per-decade',
        'Carbon Dioxide': 'nasa-counters.unit.parts-per-million'
    };

    constructor(private nasaCountersService: NasaCountersService) { }

    ngOnInit(): void {
        this.subscription = this.getNasaCountersData();
    }

    getNasaCountersData(): Subscription {
        return this.nasaCountersService.getNasaCountersData().subscribe(value => {
            this.nasaCountersData = value;
        });
    }

    ngAfterViewInit(): void {
        this.subscription.add(() => {
        });
    }

}
