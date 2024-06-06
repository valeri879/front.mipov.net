import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _http = inject(HttpClient);

  profile(userName: string = ''): Observable<User> {
    return this._http.get<User>(`http://localhost:5002/profile/${userName}`);
  }

  updateUserNameFirstNameLastNameAbout(user: { userName: string; firstName: string; lastName: string; about: string }) {
    return this._http.put<{ userName: string; firstName: string; lastName: string; about: string }>(`http://localhost:5002/profile/update-username-firstname-lastname-about`, user);
  }

  updatePassword(passwords: { oldPassword: string; newPassword: string; }): Observable<{ message: string }> {
    return this._http.put<{ message: string }>(`http://localhost:5002/profile/update-password`, passwords);
  }
  
  updateLinks(data: any): Observable<{ message: string }> {
    return this._http.put<{ message: string }>(`http://localhost:5002/profile/update-links`, data);
  }
}
