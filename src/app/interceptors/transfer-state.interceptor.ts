import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { of, tap } from 'rxjs';

export const transferStateInterceptor: HttpInterceptorFn = (req, next) => {
  const transferState = inject(TransferState);
  const platformId = inject(PLATFORM_ID);
  const key = makeStateKey(`${req.url}`);

  if (isPlatformBrowser(platformId)) {
    const cachedResponse = transferState.get(key, null);
    if (cachedResponse) {
      transferState.remove(key);
      return of(new HttpResponse(cachedResponse));
    }
    return next(req);
  }
  if (isPlatformServer(platformId)) {
    return next(req).pipe(
      tap((req) => {
        const request: any = req;
        transferState.set(key, request);
      })
    );
  }
  return next(req);
};
