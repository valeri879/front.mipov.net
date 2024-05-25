import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  private _router = inject(Router);
  private _authenticationService = inject(AuthenticationService);

  public show: boolean = false;
  public success: boolean = false;

  public form: FormGroup = new FormGroup({
    email: new FormControl('1.1maar2quez@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123123', [Validators.required, Validators.minLength(6)])
  });

  public error!: { message: string };

  login() {
    this._authenticationService.logIn(this.form.value).subscribe({
      next: ({ accessToken }) => {
        if (accessToken) {
          this.success = true;
          setTimeout(() => {
            this._router.navigateByUrl('profile')
          }, 2000);
        };
      },
      error: ({ error }) => {
        this.error = error;
      }
    });
  }
}
