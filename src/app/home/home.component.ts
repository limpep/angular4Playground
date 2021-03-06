import { Component, OnInit } from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Language() lang: string;

  constructor() { }

  ngOnInit() {
  }

}
