import { HttpInterceptorFn } from '@angular/common/http';

export const withCredentialInterceptor: HttpInterceptorFn = (req, next) => next(req.clone({ withCredentials: true }));
