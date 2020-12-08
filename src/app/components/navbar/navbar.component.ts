import {AfterViewInit, Component, HostListener, Output} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
    public innerWidth: any;

    public logoPath = 'assets/img/icons/logo3.png';

    ngAfterViewInit(): void {
        this.innerWidth = window.innerWidth;
        this.setLogo();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event): void {
        this.innerWidth = window.innerWidth;
        this.setLogo();
    }

    setLogo(): void {
        if (this.innerWidth >= 700) {
            this.logoPath = 'assets/img/icons/logo3.png';
        } else if (this.innerWidth >= 550) {
            this.logoPath = 'assets/img/icons/logo2.png';
        } else {
            // TODO: refaktor jak bedzie trzeba
            this.logoPath = 'assets/img/icons/logo2.png';
        }
    }
}
