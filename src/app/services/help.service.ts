import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Help } from '../interfaces/help';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  private _http = inject(HttpClient);

  constructor() { }

  public help(): Observable<Help[]> {
    return this._http.get<Help[]>(`${environment.apiUrl}/help`);
  }
}
