import { Component, inject } from '@angular/core';
import { EmailVerificationService } from '../../services/email-verification.service';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification-page',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './email-verification-page.component.html',
  styleUrl: './email-verification-page.component.scss'
})
export class EmailVerificationPageComponent {
  private _emailVerificationService = inject(EmailVerificationService);
  private _router = inject(Router);

  verificationCode: FormControl = new FormControl('', [Validators.required]);

  loading: boolean = false;
  success: string | undefined;
  error: string | undefined;
  resendCounter: number = 0;
  isSubmitSuccess: boolean = false;
  
  counterInterval: any;

  getVerificationCode() {
    this.resendCounter = 30;
    this.error = undefined;
    this.loading = true;
    this._emailVerificationService.getVerificationCode().subscribe({
      next: (({ message }) => {
        this.success = message;
        this.loading = false;
        this.counterInterval = setInterval(() => {
          this.resendCounter --;
          if (this.resendCounter == 0) clearInterval(this.counterInterval);
        }, 1000)
        setTimeout(() => {
          this.success = undefined;
        }, 5000);
      })
    });
  }

  submit() {
    this._emailVerificationService.submitEmailVerificationCode({ verificationCode: this.verificationCode.value }).subscribe({
      next: ({ message }) => {
        this.isSubmitSuccess = true;
        this.success = message;
        setTimeout(() => {
          this.success = undefined;
          this._router.navigateByUrl('/profile');
        }, 3000);
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.error = errorResponse.error.message;
      }
    })
  }
}
