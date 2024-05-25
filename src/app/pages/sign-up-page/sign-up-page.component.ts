import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterModule } from '@angular/router';

@Component({ selector: 'app-sign-up-page',
    standalone: true,
    templateUrl: './sign-up-page.component.html',
    styleUrl: './sign-up-page.component.scss', imports: [ReactiveFormsModule,
        RouterModule], providers: [
          
    ] })
export class SignUpPageComponent {
  public form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(55)]),
  });

  constructor(
    private _authenticationService: AuthenticationService
  ) {}

  signUp() {
    this._authenticationService.signUp(this.form.value).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
    console.log(this.form.value)
  }
}
