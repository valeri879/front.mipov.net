import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('refresh token')
  const authenticationService = inject(AuthenticationService);
  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        return authenticationService.refreshToken().pipe(
          switchMap(({ accessToken }) => {
            const retryRequest = req.clone({
              headers: req.headers.set('authorization', accessToken)
            })
            return next(retryRequest);
          }),
          catchError(refreshTokenError => {
            // If the token refresh also fails, propagate the original error
            throw refreshTokenError;
          })
        );
      }
      throw error;
    })
  );
};
