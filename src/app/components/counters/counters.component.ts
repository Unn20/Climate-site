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
    // TODO: Maybe also download text from backend
    countersText: string[] = ['Zginęło lwów w afryce',
        'Lodowców zostało stopionych',
        'Pobito niedźwiedzi w parkach',
        'Złych rzeczy przydarzyło się zwierzętom',
        'Zgubiono psów w ostatnim roku',
        'Okłamano koal w schroniskach'
    ];

    constructor(private countersService: CountersService) { }


    ngOnInit(): void {
        this.subscription = this.getCountersData();
    }

    getCountersData(): Subscription {
        // TODO: Return defaults value if you can't get data from backend
        return this.countersService.getCountersData().subscribe(value => {
            value.forEach(num => this.countersData.push(num));
            value.forEach(num => this.countersDataUpdates.push(num));
        });
    }

    updateCounters(): void {
        // Increase each counterDataUpdate by random number from 0 to 10
        // We can't use array used for initializing because it produces errors
        this.countersDataUpdates.forEach((value, index) => {
            this.countersDataUpdates[index] = value + Math.floor(Math.random() * 10);
        });
        // Update counters based on the counterDataUpdates array
        this.counters.forEach((value, index) => {
            setTimeout(() => value.update(this.countersDataUpdates[index]), Math.floor(Math.random() * 5000));
        });
    }

    initializeCounters(): void {
        for (const [i, c] of this.countersData.entries()) {
            this.counters.push(new CountUp('counter-value-' + i.toString(), c, {separator: ' ', startVal: c - (c / 3)}));
            document.getElementById('counter-text-' + i.toString()).innerHTML = this.countersText[i];
        }
        for (const c of this.counters) {
            c.start();
        }
        setInterval(() => this.updateCounters(), 6000);
        this.initialized = true;
    }

    tryInitCounters(): void {
        if (!this.initialized) {
            try {
                this.initializeCounters();
            } catch (error) {
                this.counters = [];
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
