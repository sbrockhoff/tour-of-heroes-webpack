import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import '../../public/css/styles.css';

import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
styles: [require('./app.component.css')],
directives: [ROUTER_DIRECTIVES],
providers: [
  HeroService
]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
