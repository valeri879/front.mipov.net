import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../../interfaces/user';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {
  private _profileService = inject(ProfileService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _title = inject(Title);

  public authenticationService = inject(AuthenticationService);
  user$!: Observable<User>;

  public personalInfoFormGroup: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(new RegExp('^[a-zA-Z0-9]+$'))]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    about: new FormControl(''),
  });

  public emailAndPasswordFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  error!: any;

  ngOnInit(): void {
    this.user$ = this._profileService.profile(this._route.snapshot.params['userName']).pipe(
      tap((user) => {
        this.personalInfoFormGroup.patchValue(user);
        this.emailAndPasswordFormGroup.patchValue(user);
        this._title.setTitle(`mipov.net - ${user.userName}`)
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 404) {
          this._router.navigate(['/error'], { queryParams: { error: errorResponse.error.message } });
        }
        throw errorResponse
      } )
    );
  }

  get userName(): FormControl {
    return this.personalInfoFormGroup.controls['userName'] as FormControl;
  }
}
