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
    onResize(): void {
        this.innerWidth = window.innerWidth;
        this.setLogo();
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        const navElement = document.getElementsByTagName('nav').item(0);
        const navLogoElement = document.getElementById('nav-logo');
        if (document.scrollingElement.scrollTop === 0) {
            navElement.style.backgroundPosition = '0px -250px';
            navElement.style.boxShadow = 'none';
            navLogoElement.style.height = '200%';
        } else {
            navElement.style.backgroundPosition = '0px -120px';
            navElement.style.boxShadow = '0 3px 20px rgb(50 50 50)';
            navLogoElement.style.height = '100%';
        }
    }

    setLogo(): void {
        if (this.innerWidth >= 820) {
            this.logoPath = 'assets/img/icons/logo3.png';
        } else {
            this.logoPath = 'assets/img/icons/logo2.png';
        }
    }
}
