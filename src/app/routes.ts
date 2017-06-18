import {MetaGuard} from "@ngx-meta/core";
import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          meta: {
            title: 'Sweet home',
            description: 'Home, home sweet home... and what?'
          }
        }
      }
    ]
  }
];
