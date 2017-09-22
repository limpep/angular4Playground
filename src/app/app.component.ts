import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Language, LocaleService} from "angular-l10n";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @Language() lang: string;

  constructor(public locale: LocaleService
  ) {

  }

  ngOnInit(): void {
   this.someMultipleFunction();
   this.obFunction();
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
