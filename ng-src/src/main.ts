import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// unregister former service workers
navigator.serviceWorker.getRegistrations().then(function (registrations) {
  for (const registration of registrations) {
    registration.unregister();
  }
}
);
