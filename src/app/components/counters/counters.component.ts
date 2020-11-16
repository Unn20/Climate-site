import {Component, OnInit, AfterViewInit} from '@angular/core';
import {CountUp} from "countup.js";
import {CountersService} from "../../counters.service";

@Component({
    selector: 'app-counters',
    templateUrl: './counters.component.html',
    styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit, AfterViewInit {
    // TODO: Get counters data from server and update it asynchronously
    // TODO: Service should get data from backend
    counters: CountUp[] = [];
    // countersData: number[] = [3456, 12, 98, 234, 53645, 345];
    // countersData: number[] = [1,1,1,1,1,1];
    countersData: number[] = [];
    countersText: string[] = ['Zginęło lwów w afryce',
        'Lodowców zostało stopionych',
        'Pobito niedźwiedzi w parkach',
        'Złych rzeczy przydarzyło się zwierzętom',
        'Zgubiono psów w ostatnim roku',
        'Okłamano koal w schroniskach'
    ];

    constructor(private countersService: CountersService) {
    }


    ngOnInit(): void {
        this.getCountersData();
    }

    getCountersData(): void {
        this.countersService.getCountersData().subscribe(value => this.countersData = value);
    }

    updateCounters() {
        // this.countersData.forEach((value, index, array) =>
        //     array[index] += Math.floor(Math.random()*5));
        // this.counters.forEach((value, index, array) =>
        //     array[index].update(this.countersData[index]));
    }

    ngAfterViewInit(): void {
        for (let [i, c] of this.countersData.entries()) {
            this.counters.push(new CountUp('counter-value-' + i.toString(), c, {separator: " ", startVal: c - c/3}));
            document.getElementById('counter-text-' + i.toString()).innerHTML = this.countersText[i];
        }
        this.updateCounters();
        for (let c of this.counters) {
            c.start();
        }
        setInterval(() => this.updateCounters(), 6000);
    }
}
