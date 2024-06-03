import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, RouterModule } from '@angular/router';
import { JsonPipe, NgIf } from '@angular/common';
import { map, switchMap } from 'rxjs';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss', imports: [
    ReactiveFormsModule,
    RouterModule,
    JsonPipe,
    NgIf
  ],
})
export class SignUpPageComponent implements OnInit{

  public form!: FormGroup;
  public error!: { message: string, errorType: string };
  public showPassword: boolean = false;

  constructor(
    private _authenticationService: AuthenticationService,
    private _profileService: ProfileService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(new RegExp('^[a-zA-Z0-9]+$'))]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(55)]),
      about: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(55)]),
  });

  }

  signUp() {
    this._authenticationService.signUp(this.form.value).pipe(
      switchMap(data => this._profileService.profile().pipe(map(( { userName } ) => {
        return {
          userName,
          ...data
        }
      })))
    ).subscribe({
      next: ({ accessToken, userName }) => {
        if (accessToken) {
            this._router.navigateByUrl(userName);
        };
      },
      error: ({ error }) => this.error = error
    });
  }

  get userName(): FormControl {
    return this.form.controls['userName'] as FormControl;
  }
}
