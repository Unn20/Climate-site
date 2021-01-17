import {Component, OnInit} from '@angular/core';
import {CountUp} from 'countup.js';

@Component({
    selector: 'app-deaths-counter',
    templateUrl: './deaths-counter.component.html',
    styleUrls: ['./deaths-counter.component.scss']
})
export class DeathsCounterComponent implements OnInit {

    private distanceToStartFadeIn = 700;
    private yearlyDeathsCausedByPollution = 6000000;
    private countUp: CountUp;
    public counterStarted = false;
    public counterFinished = false;

    constructor() {
    }

    ngOnInit(): void {
        this.countUp = new CountUp(
            'countUp',
            this.yearlyDeathsCausedByPollution,
            {
                startVal: this.yearlyDeathsCausedByPollution - 1000,
                duration: 1.5,
                separator: ' '
            }
        );
    }

    public onScroll(container: HTMLDivElement): void {
        if (!this.counterStarted && (document.scrollingElement.scrollTop > container.offsetTop - this.distanceToStartFadeIn)) {
            this.countUp.start();
            this.counterStarted = true;
            setTimeout(() => {
                this.counterFinished = true;
            }, 1700);
        }
    }

}
