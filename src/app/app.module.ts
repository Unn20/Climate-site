import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CountersComponent} from './components/counters/counters.component';
import {FiguresComponent} from './components/figures/figures.component';
import {FooterComponent} from './components/footer/footer.component';
import {PollutionEffectsComponent} from './components/pollution-effects/pollution-effects.component';
import {CommonModule} from '@angular/common';
import {DeathsCounterComponent} from './components/pollution-effects/deaths-counter/deaths-counter.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsScrollComponent} from './components/news-scroll/news-scroll.component';
import {ScrollViewModule} from '@progress/kendo-angular-scrollview';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArticlePageComponent} from './components/article-page/article-page.component';
import {AppRoutingModule} from './app-routing.module';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {PrivacyPolicyPageComponent} from './components/privacy-policy-page/privacy-policy-page.component';
import {FigureComponent} from './components/figures/figure/figure.component';
import {ChartModule} from 'primeng/chart';
import {ClimateDataApiService} from './services/climate-data-api.service';
import { ArticleListPageComponent } from './components/article-list-page/article-list-page.component';
import { HomePageContentComponent } from './components/home-page-content/home-page-content.component';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CountersComponent,
        FiguresComponent,
        FooterComponent,
        PollutionEffectsComponent,
        DeathsCounterComponent,
        NavbarComponent,
        NewsScrollComponent,
        ArticlePageComponent,
        ContactPageComponent,
        PrivacyPolicyPageComponent,
        FigureComponent,
        ArticleListPageComponent,
        HomePageContentComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        ScrollViewModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ChartModule
    ],
    providers: [ ClimateDataApiService ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
