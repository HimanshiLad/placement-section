import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppRoutingModule).catch(err => console.error(err));
