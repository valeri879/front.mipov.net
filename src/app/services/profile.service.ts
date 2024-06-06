import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _http = inject(HttpClient);

  profile(userName: string = ''): Observable<User> {
    return this._http.get<User>(`${environment.apiUrl}/profile/${userName}`);
  }

  updateUserNameFirstNameLastNameAbout(user: { userName: string; firstName: string; lastName: string; about: string }) {
    return this._http.put<{ userName: string; firstName: string; lastName: string; about: string }>(`${environment.apiUrl}/profile/update-username-firstname-lastname-about`, user);
  }

  updatePassword(passwords: { oldPassword: string; newPassword: string; }): Observable<{ message: string }> {
    return this._http.put<{ message: string }>(`${environment.apiUrl}/profile/update-password`, passwords);
  }
  
  updateLinks(data: any): Observable<{ message: string }> {
    return this._http.put<{ message: string }>(`${environment.apiUrl}/profile/update-links`, data);
  }
}
