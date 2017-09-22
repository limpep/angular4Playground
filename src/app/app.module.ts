import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import {LocaleService, LocalizationModule, TranslationService} from "angular-l10n";
import { MetaModule } from '@ngx-meta/core';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {Ng2CarouselamosModule} from "ng2-carouselamos";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2CarouselamosModule,
    LocalizationModule.forRoot(),
    RouterModule.forRoot(routes),
    MetaModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public locale: LocaleService, public translation: TranslationService) {
    this.locale.addConfiguration()
    .addLanguages(['en', 'it', 'tr'])
    .setCookieExpiration(30)
    .defineLanguage('en');

    this.translation.addConfiguration()
    .addProvider('./assets/locale-');

    this.translation.init();
  }
}
