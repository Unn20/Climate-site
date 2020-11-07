import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CountersComponent} from './components/counters/counters.component';
import {FiguresComponent} from './components/figures/figures.component';
import {FooterComponent} from './components/footer/footer.component';
import {NewsHeaderComponent} from './components/news-header/news-header.component';
import {PollutionEffectsComponent} from './components/pollution-effects/pollution-effects.component';
import {CommonModule} from '@angular/common';
import {DeathsCounterComponent} from './components/pollution-effects/deaths-counter/deaths-counter.component';
import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CountersComponent,
        FiguresComponent,
        FooterComponent,
        NewsHeaderComponent,
        PollutionEffectsComponent,
        DeathsCounterComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
