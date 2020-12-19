import {Component, OnInit, AfterViewInit} from '@angular/core';
import {CountUp} from 'countup.js';
import {CountersService} from '../../services/counters.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-counters',
    templateUrl: './counters.component.html',
    styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit, AfterViewInit {
    counters: CountUp[] = [];
    subscription: Subscription;
    initialized = false;
    countersData: number[] = [];
    countersDataUpdates: number[] = [];
    changeBySecond: number[] = [];
    updateTimeout = 6000;
    dateOfDataFetch: Date;
    countersText: string[] = ['Wydalono ton CO2 do atmosfery',
        'Stopniało ton lodu',
        'Użyto teradżuli prądu',
        'Wyrzucono ton odpadów',
        'Wydobyto ton surowców z ziemi',
        'Wyrzucono ton plastiku do oceanu'
    ];
    urls = {
        0: 'https://www.theworldcounts.com/challenges/climate-change/global-warming/global-co2-emissions/story',
        1: 'https://www.theworldcounts.com/challenges/climate-change/global-warming/the-melting-ice-caps/story',
        2: 'https://www.theworldcounts.com/challenges/climate-change/energy/global-energy-consumption/story',
        3: 'https://www.theworldcounts.com/challenges/planet-earth/state-of-the-planet/world-waste-facts/story',
        4: 'https://www.theworldcounts.com/challenges/planet-earth/state-of-the-planet/resources-extracted-from-earth/story',
        5: 'https://www.theworldcounts.com/challenges/planet-earth/oceans/plastic-in-the-ocean/story'
    };

    constructor(private countersService: CountersService) { }


    ngOnInit(): void {
        this.subscription = this.getCountersData();
    }

    getCountersData(): Subscription {
        const columnOrder = [
            'carbon_dioxide', 'melted_ice', 'tera_joules_used', 'waste_dumped', 'resources_extracted', 'plastic_in_ocean'
        ];
        return this.countersService.getCountersData().subscribe(value => {
            const newestRecord = value[0];
            const ID = 'id';
            this.dateOfDataFetch = new Date(newestRecord[ID]);
            for (const key of columnOrder) {
                this.countersData.push(newestRecord[key]);
                this.countersDataUpdates.push(newestRecord[key]);
            }
        });
    }

    openCountersPage(i: number): void {
        window.open(this.urls[i], '_blank');
    }

    updateCounters(): void {
        // Increase each counterDataUpdate by random number from 0 to 10
        // We can't use array used for initializing because it produces errors
        const localTimeout = [];
        this.countersDataUpdates.forEach((value, index) => {
            localTimeout.push(Math.round((Math.random() * 5000) / 1000) * 1000);
            this.countersDataUpdates[index] += this.changeBySecond[index] * (Math.round(localTimeout[index] / 1000) +
                this.updateTimeout / 1000);
        });
        // Update counters based on the counterDataUpdates array
        this.counters.forEach((value, index) => {
            setTimeout(() => value.update(this.countersDataUpdates[index]), localTimeout[index]);
        });
    }

    initializeCounters(): void {
        for (const [i, c] of this.countersData.entries()) {
            const secondData = c / ((this.dateOfDataFetch.getHours() + 1) * 3600 +
                this.dateOfDataFetch.getMinutes() * 60 +
                this.dateOfDataFetch.getSeconds());
            const now = new Date();
            const secondsPassed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
            const initValue = secondsPassed * secondData;
            this.changeBySecond.push(secondData);
            this.counters.push(new CountUp('counter-value-' + i.toString(), initValue,
                {separator: ' ', startVal: initValue - (initValue / 3)}));
            this.countersDataUpdates[i] = initValue;
            document.getElementById('counter-text-' + i.toString()).innerHTML = this.countersText[i];
        }
        for (const c of this.counters) {
            c.start();
        }
        setInterval(() => this.updateCounters(), this.updateTimeout);
        this.initialized = true;
    }

    tryInitCounters(): void {
        if (!this.initialized) {
            try {
                this.initializeCounters();
            } catch (error) {
                this.counters = [];
                this.changeBySecond = [];
            }
            setTimeout(() => this.tryInitCounters(), 50);
        }
    }

    ngAfterViewInit(): void {
        // Upon loading of page add subscription event, when subscription is finalized initialized counters,
        // That means if there is data and page is loaded then init counters.
        this.subscription.add(() => this.tryInitCounters());
    }
}
