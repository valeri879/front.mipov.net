import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { withCredentialInterceptor } from './interceptors/with-credential.interceptor';
import { accessTokenInterceptor } from './interceptors/access-token.interceptor';
import { refreshTokenInterceptor } from './interceptors/refresh-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([withCredentialInterceptor, accessTokenInterceptor, refreshTokenInterceptor]),
      withFetch(),
    ),
    provideRouter(routes),
    provideClientHydration(withHttpTransferCacheOptions({
      includePostRequests: true
    })),
    provideAnimationsAsync()
  ]
};
