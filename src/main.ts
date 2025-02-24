import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

async function bootstrap() {
  if (isDevMode()) {
    const { worker } = await import('./mocks/browser');
    return worker.start();
  }

  return Promise.resolve();
}

bootstrap().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
});
