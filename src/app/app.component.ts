import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';
import {LoadingPageService} from './services/loading-page.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public itemsLoading = 0;
    public errorFlag = false;

    constructor(private translateService: TranslateService,
                private router: Router,
                private loadingPageService: LoadingPageService) {
        translateService.setDefaultLang('pl');
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });

        this.loadingPageService.setErrorCalled$.subscribe((newValue: boolean) => {
            this.errorFlag = newValue;
        });

        this.loadingPageService.incrementItemsLoadingCalled$.subscribe(() => {
            if (this.itemsLoading < 0) {
                this.itemsLoading = 1;
            } else {
                this.itemsLoading++;
            }
        });
        this.loadingPageService.decrementItemsLoadingCalled$.subscribe(() => {
            if (this.itemsLoading === 0) {
                this.itemsLoading = 0;
            } else {
                this.itemsLoading--;
            }
        });
    }


}
