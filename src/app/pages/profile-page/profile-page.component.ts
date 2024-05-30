import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../../interfaces/user';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {
  private _profileService = inject(ProfileService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _title = inject(Title);
  

  user$!: Observable<User>;

  ngOnInit(): void {
    this.user$ = this._profileService.profile(this._route.snapshot.params['userName']).pipe(
      tap(({ userName }) => this._title.setTitle(`mipov.net - ${userName}`)),
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 404) {
          this._router.navigate(['/error'], { queryParams: { error: errorResponse.error.message } });
        }
        throw errorResponse
      } )
    );
  }
}
