import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translateService: TranslateService,
                private router: Router) {
        translateService.setDefaultLang('pl');
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }
}
