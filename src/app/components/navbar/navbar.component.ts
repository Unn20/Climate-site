import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ScrollViewComponent} from '@progress/kendo-angular-scrollview';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
    @ViewChild('myHamburger') private myHamburgerDiv;  // TODO: REMOVE THIS!
    public innerWidth: any;
    public logoPath: string;
    private isInitializedOnHomePage: boolean;
    public hamburgerVisible = 'none';
    public hamburgerDirection = 'none';

    constructor(private router: Router) {
        this.innerWidth = window.innerWidth;
        this.setLogo();
    }

    ngAfterViewInit(): void {
        this.onRouteUrlUpdate();
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.onRouteUrlUpdate();
            }
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.innerWidth = window.innerWidth;
        this.setLogo();
    }

    public hamburgerToggle(): void {
        if (this.hamburgerVisible === 'none'){
            this.switchOnHamburger();
        } else {
            this.switchOffHamburger();
        }
    }

    private switchOnHamburger(): void {
        this.hamburgerVisible = 'flex';
        this.hamburgerDirection = 'column';
    }

    private switchOffHamburger(): void {
        this.hamburgerVisible = 'none';
        this.hamburgerDirection = 'none';
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!(document.getElementById('burgerIcon').contains(event.target))) {
            this.switchOffHamburger();
        } else {
            if (document.getElementById('burgerContent').contains(event.target)) {
                this.switchOffHamburger();
            }
        }
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        this.switchOffHamburger();
        const navElement = document.getElementsByTagName('nav').item(0);
        const navLogoElement = document.getElementById('nav-logo');
        if (this.isInitializedOnHomePage) {
            navElement.style.position = 'fixed';
            if (document.scrollingElement.scrollTop === 0) {
                navElement.classList.add('on-top');
                navLogoElement.classList.add('on-top');
            } else {
                navElement.classList.remove('on-top');
                navLogoElement.classList.remove('on-top');
            }
        } else {
            navElement.style.position = 'sticky';
            navElement.classList.remove('on-top');
            navLogoElement.classList.remove('on-top');
        }
    }

    private onRouteUrlUpdate(): void {
        this.isInitializedOnHomePage = this.router.url === '/home';
        this.onScroll();
    }

    private setLogo(): void {
        if (this.innerWidth >= 820) {
            this.logoPath = 'assets/img/icons/logo3.png';
        } else {
            this.logoPath = 'assets/img/icons/logo2.png';
        }
    }
}
