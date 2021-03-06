//in memory web api
import {XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './app/in-memory-data.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app/app.component';
import {appRouterProviders} from './app/app.routes';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  {provide: XHRBackend, useClass: InMemoryBackendService},  //in-mem server
  {provide: SEED_DATA, useClass: InMemoryDataService} //in-mem server data
]);
