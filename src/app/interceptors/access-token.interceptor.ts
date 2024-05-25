import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const accessTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  
  const clonedReq = req.clone({ headers: req.headers.set('authorization', cookieService.get('accessToken')) })
  return next(clonedReq);
};
