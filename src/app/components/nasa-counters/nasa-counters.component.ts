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
