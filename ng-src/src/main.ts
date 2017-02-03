import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// const _window: any = (<any>window);
// const hoodie = _window.hoodie;
// 
// hoodie.ready.then(function() {platformBrowserDynamic().bootstrapModule(AppModule);});
platformBrowserDynamic().bootstrapModule(AppModule);

