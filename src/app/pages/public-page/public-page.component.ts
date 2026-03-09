import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Observable, catchError, of, tap } from 'rxjs';
import { User } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-public-page',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgFor
  ],
  templateUrl: './public-page.component.html',
  styleUrl: './public-page.component.scss'
})
export class PublicPageComponent implements OnInit {
  private _profileService = inject(ProfileService);
  private _route = inject(ActivatedRoute);
  private _title = inject(Title);
  private _meta = inject(MetaService);

  user$!: Observable<User>;

  ngOnInit(): void {
    const userNameFromRoute = this._route.snapshot.params['userName'] || '';

    this.user$ = this._profileService.profile(userNameFromRoute).pipe(
      tap(({ userName, firstName, lastName }) => {
        this._title.setTitle(`@${userName} - mipov.net`);
        this._meta.update(`Find ${userName}'s all social profile links`, `You can find ${firstName} ${lastName}'s all social profile links here`);
      }),
      catchError(() => {
        const fallbackUser: User = {
          userName: userNameFromRoute,
          firstName: '',
          lastName: '',
          email: '',
          isVerified: false,
          avatarPath: null,
          password: '',
          verificationCode: '',
          date: '',
          about: '',
          links: []
        };

        this._title.setTitle(`@${userNameFromRoute} - mipov.net`);
        this._meta.update(`Find ${userNameFromRoute}'s all social profile links`, `Public profile page on mipov.net`);
        return of(fallbackUser);
      })
    );
  }
}
