import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
    readonly redirectLink = '/home';
    readonly error404Message = 'Błąd 404: Podana strona nie istnieje';

    constructor() {
    }

    ngOnInit(): void {
    }

}
