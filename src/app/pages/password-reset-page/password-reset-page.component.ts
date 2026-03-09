import { HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-password-reset-page',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './password-reset-page.component.html',
  styleUrl: './password-reset-page.component.scss'
})
export class PasswordResetPageComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _authenticationService = inject(AuthenticationService);

  token: string = '';
  loading: boolean = false;
  success: string | null = null;
  error: string | null = null;
  resetCompleted: boolean = false;

  requestResetFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  resetPasswordFormGroup: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)])
  });

  ngOnInit(): void {
    this.token = this._route.snapshot.queryParams['token'] || '';
  }

  get hasToken(): boolean {
    return Boolean(this.token);
  }

  get isPasswordsMismatch(): boolean {
    return this.resetPasswordFormGroup.value.password !== this.resetPasswordFormGroup.value.repeatPassword;
  }

  requestPasswordReset(): void {
    this.loading = true;
    this.success = null;
    this.error = null;
    this._authenticationService.requestPasswordReset(this.requestResetFormGroup.value).subscribe({
      next: ({ message }) => {
        this.success = message;
        this.loading = false;
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.error = errorResponse.error?.message || 'Failed to send reset email.';
        this.loading = false;
      }
    });
  }

  resetPassword(): void {
    if (this.isPasswordsMismatch || !this.token) {
      return;
    }

    this.loading = true;
    this.success = null;
    this.error = null;
    this._authenticationService.resetPassword({
      token: this.token,
      password: this.resetPasswordFormGroup.value.password
    }).subscribe({
      next: ({ message }) => {
        this.success = message;
        this.loading = false;
        this.resetCompleted = true;
        setTimeout(() => {
          this._router.navigateByUrl('/login');
        }, 1500);
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.error = errorResponse.error?.message || 'Failed to reset password.';
        this.loading = false;
      }
    });
  }
}
