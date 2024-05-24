import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private _http: HttpClient
  ) { }
  
  signUp(user: User) {
    return this._http.post('http://localhost:5002/sign-up', user);
  }

  logIn(user: { email: string; password: string }): Observable<{ accessToken: string; refreshToken: string }> {
    return this._http.post<{ accessToken: string; refreshToken: string }>('http://localhost:5002/login', user)
  }

}
