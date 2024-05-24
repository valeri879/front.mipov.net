import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { withCredentialInterceptor } from './interceptors/with-credential.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideHttpClient(
      withFetch(),
      withInterceptors([withCredentialInterceptor])
    ),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync()
  ]
};
