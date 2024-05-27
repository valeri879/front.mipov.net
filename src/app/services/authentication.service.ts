import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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

  signUp(user: User) {
    return this._http.post('http://localhost:5002/sign-up', user).pipe(
      tap(() => this.isLoggedIn$.next(true))
    );
  }

  logIn(user: { email: string; password: string }): Observable<{ accessToken: string; refreshToken: string }> {
    return this._http.post<{ accessToken: string; refreshToken: string }>('http://localhost:5002/login', user).pipe(
      tap(() => this.isLoggedIn$.next(true))
    );
  }

  refreshToken(): Observable<{ accessToken: string; refreshToken: string }> {
    return this._http.get<{ accessToken: string; refreshToken: string }>('http://localhost:5002/token');
  }

  logOut() {
    this._cookieService.deleteAll();
    this.isLoggedIn$.next(false);
    this._router.navigateByUrl('/');
  }

  private _isLoggedIn()  {
    this._cookieService.get('accessToken') ? this.isLoggedIn$.next(true) : this.isLoggedIn$.next(false);
  }

}
