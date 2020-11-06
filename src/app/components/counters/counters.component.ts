import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CountUp} from 'countup.js';

@Component({
    selector: 'app-counters',
    templateUrl: './counters.component.html',
    styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit, AfterViewInit {
    numbers = [{id: 1, counter: 9403, text: 'umiera pand na sekunde'},
        {id: 2, counter: 7132, text: 'utopiło sie fok'},
        {id: 3, counter: 3458, text: 'spalono drzew'},
        {id: 4, counter: 1023432, text: 'wybito zębów tygrysom'},
        {id: 5, counter: 12, text: 'ludzi przegląda te stronę'}];
    counters = [];

    setCounters(): void {
        this.numbers.forEach(obj => this.counters.push(new CountUp(obj.id.toString(), obj.counter)));
    }

    startCounters(): void {
        this.counters.forEach(el => el.start());
    }

    updateCounters(): void {
        this.counters.forEach(el => el.update(el.endVal + el.endVal / 10));
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.setCounters();
        this.startCounters();
    }

}
