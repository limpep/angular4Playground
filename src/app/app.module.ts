import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import {LocaleService, LocalizationModule, TranslationService} from "angular-l10n";
import { MetaModule } from '@ngx-meta/core';
import {LOG_LOGGER_PROVIDERS} from "angular2-logger/core";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LocalizationModule.forRoot(),
    RouterModule.forRoot(routes),
    MetaModule.forRoot()
  ],
  providers: [LOG_LOGGER_PROVIDERS ],
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
