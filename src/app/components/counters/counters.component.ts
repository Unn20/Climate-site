import {Component, OnInit, AfterViewInit} from '@angular/core';
import {CountUp} from "countup.js";

@Component({
    selector: 'app-counters',
    templateUrl: './counters.component.html',
    styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit, AfterViewInit {
    counters: CountUp[] = [];
    countersData: number[] = [3456, 12, 98, 234, 53645, 345];
    countersText: string[] = ['Zginęło lwów w afryce',
        'Lodowców zostało stopionych',
        'Pobito niedźwiedzi w parkach',
        'Złych rzeczy przydarzyło się zwierzętom',
        'Zgubiono psów w ostatnim roku',
        'Okłamano koal w schroniskach'
    ];

    constructor() {
    }


    ngOnInit(): void {
        for (let [i, c] of this.countersData.entries()) {
            this.counters.push(new CountUp('counter-value-' + i.toString(), c, {separator: " "}));
            document.getElementById('counter-text-' + i.toString()).innerHTML = this.countersText[i];
        }
    }

    updateCounters() {
        this.countersData.forEach((value, index, array) => array[index] += Math.floor(Math.random()*5));
        this.counters.forEach((value, index, array) => array[index].update(this.countersData[index]));
        setTimeout(() => this.updateCounters(), 5000);
    }

    ngAfterViewInit(): void {
        this.updateCounters();
        for (let c of this.counters) {
            c.start();
        }
        setTimeout(() => this.updateCounters(), 5000);
    }
}
