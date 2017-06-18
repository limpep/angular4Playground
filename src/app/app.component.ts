import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Language, LocaleService} from "angular-l10n";
import {Logger} from "angular2-logger/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @Language() lang: string;

  constructor(public locale: LocaleService,private _logger: Logger
  ) {

  }

  ngOnInit(): void {
   this.someMultipleFunction();
   this.obFunction();

    this._logger.error('This is a priority level 1 error message...');
    this._logger.warn('This is a priority level 2 warning message...');
    this._logger.info('This is a priority level 3 warning message...');
    this._logger.debug('This is a priority level 4 debug message...');
    this._logger.log('This is a priority level 5 log message...');
  }

  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);
  }

  private obFunction(){
    const obs = new Observable(function subscriber(observer) {
        const intID  = setInterval(()=>{
          observer.next("🍕🥞🥙🥘");
        },2000);

        return function unsubscribe(){
          clearInterval(intID);
        }
    });

    const sub = obs.subscribe(val => console.log(val));

    setTimeout(()=>{
      sub.unsubscribe();
    },5500);

  }


  private someMultipleFunction(): any{

    function* a(){
    yield 40;
    yield 41;
    return 42;
    }
    let iter = a();

   return iter.next().value;

  }


  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }


}
