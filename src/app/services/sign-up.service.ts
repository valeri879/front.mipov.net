import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private _http: HttpClient
  ) { }
  
  signUp(user: User) {
    this._http.post('http://localhost:5002/sign-up', user);
  }

}
