import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, RouterModule } from '@angular/router';
import { JsonPipe, NgIf } from '@angular/common';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss', imports: [
    ReactiveFormsModule,
    RouterModule,
    NgIf
  ],
})
export class SignUpPageComponent implements OnInit{

  meta = inject(MetaService);

  public form!: FormGroup;
  public error!: { message: string, errorType: string };
  public showPassword: boolean = false;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // meta
    this.meta.update('Share Your Social Networks Links - Mipov.net', 'Share Your Social Media Profile Links With One Platform');

    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(new RegExp('^[a-zA-Z0-9]+$'))]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(55)]),
      about: new FormControl('', [Validators.required, Validators.maxLength(55)]),
  });

  }

  signUp() {
    this._authenticationService.signUp(this.form.value).subscribe({
      next: ({ accessToken }) => {
        if (accessToken) {
            this._router.navigateByUrl('/profile');
        };
      },
      error: ({ error }) => this.error = error
    });
  }

  get userName(): FormControl {
    return this.form.controls['userName'] as FormControl;
  }
}
