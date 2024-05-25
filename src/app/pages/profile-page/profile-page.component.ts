import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { catchError, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

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
  profileService = inject(ProfileService);

  user$!: Observable<User>;

  ngOnInit(): void {
    this.user$ = this.profileService.profile().pipe(
      catchError(({ error }) => {
        console.log(error)
        throw error
      } )
    );
  }
}
