import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {
  private _http = inject(HttpClient);
  constructor() { }

  getVerificationCode(): Observable<{ message: string }> {
    return this._http.get<{ message: string }>(`${environment.apiUrl}/mail/mail-verification-code`);
  }

  submitEmailVerificationCode(data: { verificationCode: string }): Observable<{ message: string }> {
    return this._http.post<{ message: string }>(`${environment.apiUrl}/mail/submit-email-verification-code`, data);
  }
}
