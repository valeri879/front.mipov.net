import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _http = inject(HttpClient);
  private _cookieService = inject(CookieService);
  private _router = inject(Router);
  
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor() {
    this._isLoggedIn();
  }

  signUp(user: User): Observable<{ accessToken: string; refreshToken: string }>  {
    return this._http.post<{ accessToken: string; refreshToken: string }>(`${environment.apiUrl}/sign-up`, user).pipe(
      tap(() => this.isLoggedIn$.next(true))
    );
  }

  logIn(user: { email: string; password: string }): Observable<{ accessToken: string; refreshToken: string }> {
    return this._http.post<{ accessToken: string; refreshToken: string }>(`${environment.apiUrl}/login`, user).pipe(
      tap(() => this.isLoggedIn$.next(true))
    );
  }

  refreshToken(): Observable<{ accessToken: string; refreshToken: string }> {
    return this._http.get<{ accessToken: string; refreshToken: string }>(`${environment.apiUrl}/token`);
  }

  logOut() {
    this._cookieService.deleteAll();
    this._router.navigateByUrl('/');
    this.isLoggedIn$.next(false);
  }

  private _isLoggedIn()  {
    this._cookieService.get('accessToken') ? this.isLoggedIn$.next(true) : this.isLoggedIn$.next(false);
  }

}
