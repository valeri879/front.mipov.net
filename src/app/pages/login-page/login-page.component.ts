import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NgIf } from '@angular/common';
import { map, pipe, switchMap } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { MetaService } from '../../services/meta.service';

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
export class LoginPageComponent implements OnInit {
  private _router = inject(Router);
  private _authenticationService = inject(AuthenticationService);
  private _meta = inject(MetaService);

  public show: boolean = false;
  public success: boolean = false;

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  public error!: { message: string };

  ngOnInit(): void {
    this._meta.update('Login and share your social networks links with mipovnet', 'Mipov.net is the ultimate platform for effortlessly sharing your social media profiles. Whether you want to showcase your latest YouTube videos, viral TikTok moments, Facebook updates, Twitter thoughts, or Instagram photos, mipov.net makes it simple. ')
  }

  login() {
    this._authenticationService.logIn(this.form.value).subscribe({
      next: ({ accessToken }) => {
        if (accessToken) {
          this.success = true;
          setTimeout(() => {
            this._router.navigateByUrl('/profile');
          }, 1000);
        };
      },
      error: ({ error }) => {
        this.error = error;
      }
    });
  }
}
