import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const accessTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('access token')
  const cookieService = inject(CookieService);
  
  const token = cookieService.get('accessToken');

  const clonedReq = req.clone({ headers: req.headers.set('authorization', token) });
  return next(clonedReq || req);
};
