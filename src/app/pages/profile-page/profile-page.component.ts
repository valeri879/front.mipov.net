import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../../interfaces/user';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    ReactiveFormsModule,
    RouterLink
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
  // personal info form group
  public personalInfoFormGroup: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(255), Validators.pattern(new RegExp('^[a-zA-Z0-9]+$'))]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    about: new FormControl('', [Validators.maxLength(35)]),
  });
  // password change form group
  public passwordsFormGroup: FormGroup = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)])
  });
  // email change form group
  public emailsFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(255)]),
    // TO DO: implement this form control after backend finishes
    newEmail: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(255)]),
  });

  error!: any;

  // success prop for personal info
  updateUserNameFirstNameLastNameAboutSuccess: boolean = false;
  // error prop for personal info
  updateUserNameFirstNameLastNameAboutError: any;


  // success prop for password update
  updatePasswordSuccess!: string | null;
  updatePasswordError!: string | null;
  // show passwords
  showOldPassword: boolean = false;
  showNewPassword: boolean = false;

  ngOnInit(): void {
    // set data to form groups
    this.user$ = this._profileService.profile(this._route.snapshot.params['userName']).pipe(
      tap((user) => {
        this.emailsFormGroup.patchValue(user);
        this.personalInfoFormGroup.patchValue(user);
        this._title.setTitle(`mipov.net - ${user.userName}`)
      }),
      /* catchError((errorResponse: HttpErrorResponse) => {
        console.log(123)
        if (errorResponse.status === 404) {
          this._router.navigate(['/error'], { queryParams: { error: errorResponse.error.message } });
        }
        throw errorResponse
      } ) */
    );
  }
  
  // update password method
  updatePassword() {
    this._profileService.updatePassword(this.passwordsFormGroup.value).subscribe({
      next: ({ message }) => {
        this.updatePasswordSuccess = message;
        setTimeout(() => {
          this.updatePasswordSuccess = null;
          this.passwordsFormGroup.reset();
        }, 3000);
        this.updatePasswordError = null;
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.updatePasswordError = errorResponse.error.message;
        console.log(errorResponse);
      }
    })
  }
  
  // update personal info method
  updateUserNameFirstNameLastNameAbout() {
    this._profileService.updateUserNameFirstNameLastNameAbout(this.personalInfoFormGroup.value).subscribe({
      next: () => {
        this.updateUserNameFirstNameLastNameAboutSuccess = true;
        setTimeout(() => {
          this.updateUserNameFirstNameLastNameAboutSuccess = false;
        }, 3000);
        this.updateUserNameFirstNameLastNameAboutError = null;
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.updateUserNameFirstNameLastNameAboutError = errorResponse.error.message;
      }
    });
  }

  // user name getter
  get userName(): FormControl {
    return this.personalInfoFormGroup.controls['userName'] as FormControl;
  }
  
  // email getter
  get email(): FormControl {
    return this.emailsFormGroup.controls['email'] as FormControl;
  }
}
