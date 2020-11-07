import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private navbarElement: HTMLElement;
    private navbarOffsetTop: number;

    ngOnInit(): void {
        this.navbarElement = document.getElementById('navbar');
        this.navbarOffsetTop = this.navbarElement.offsetTop;
    }

    public onScroll(): void {
        if (document.scrollingElement.scrollTop >= this.navbarOffsetTop) {
            this.navbarElement.classList.add('sticky');
        } else {
            this.navbarElement.classList.remove('sticky');
        }
    }

}
