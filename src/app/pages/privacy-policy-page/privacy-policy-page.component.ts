import { AsyncPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {
  http = inject(HttpClient);

  data$: Observable<any> = this.http.get(`${environment.apiUrl}/privacy-policy`);
}

