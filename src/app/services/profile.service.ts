import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private _http = inject(HttpClient);

  profile(): Observable<User> {
    return this._http.get<User>('http://localhost:5002/profile');
  }
}
