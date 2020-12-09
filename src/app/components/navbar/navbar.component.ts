import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public innerWidth: any;
    public logoPath: string;

    constructor() {
        this.innerWidth = window.innerWidth;
        this.setLogo();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event): void {
        this.innerWidth = window.innerWidth;
        this.setLogo();
    }

    setLogo(): void {
        if (this.innerWidth >= 820) {
            this.logoPath = 'assets/img/icons/logo3.png';
        } else {
            this.logoPath = 'assets/img/icons/logo2.png';
        }
    }
}
