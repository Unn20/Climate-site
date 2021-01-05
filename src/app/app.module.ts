import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CountersComponent} from './components/counters/counters.component';
import {FooterComponent} from './components/footer/footer.component';
import {PollutionEffectsDigestComponent} from './components/pollution-effects-digest/pollution-effects-digest.component';
import {CommonModule} from '@angular/common';
import {DeathsCounterComponent} from './components/pollution-effects-digest/deaths-counter/deaths-counter.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NewsScrollComponent} from './components/news-scroll/news-scroll.component';
import {ScrollViewModule} from '@progress/kendo-angular-scrollview';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArticlePageComponent} from './components/article-page/article-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutUsPageComponent} from './components/about-us-page/about-us-page.component';
import {PrivacyPolicyPageComponent} from './components/privacy-policy-page/privacy-policy-page.component';
import {FigureComponent} from './components/figure/figure.component';
import {ChartModule} from 'primeng/chart';
import {ClimateDataApiService} from './services/climate-data-api.service';
import {ArticleListPageComponent} from './components/article-list-page/article-list-page.component';
import {HomePageContentComponent} from './components/home-page-content/home-page-content.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GlobalWarmingPageComponent} from './components/pollution-effects-subpages/global-warming-page/global-warming-page.component';
import {SmogPageComponent} from './components/pollution-effects-subpages/smog-page/smog-page.component';
import {OzonePageComponent} from './components/pollution-effects-subpages/ozone-page/ozone-page.component';
import { SourcesPageComponent } from './components/sources-page/sources-page.component';
import { NasaCountersComponent } from './components/nasa-counters/nasa-counters.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CountersComponent,
        FooterComponent,
        PollutionEffectsDigestComponent,
        DeathsCounterComponent,
        NavbarComponent,
        NewsScrollComponent,
        ArticlePageComponent,
        AboutUsPageComponent,
        PrivacyPolicyPageComponent,
        FigureComponent,
        ArticleListPageComponent,
        HomePageContentComponent,
        PageNotFoundComponent,
        GlobalWarmingPageComponent,
        SmogPageComponent,
        OzonePageComponent,
        SourcesPageComponent,
        NasaCountersComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        ScrollViewModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ChartModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        })
    ],
    providers: [ClimateDataApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
