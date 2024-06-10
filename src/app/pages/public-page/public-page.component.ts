import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Observable, tap } from 'rxjs';
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
    this.user$ = this._profileService.profile(this._route.snapshot.params['userName']).pipe(
      tap(({ userName, firstName, lastName }) => {
        this._meta.update(`Find ${userName}'s all social profile links`, `You can find ${firstName} ${lastName}'s all social profile links here`);
      })
    );
  }
}
