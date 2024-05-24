import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public show: boolean = false;

  public form: FormGroup = new FormGroup({
    email: new FormControl('1.1maar2quez@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123123', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private _authenticationService: AuthenticationService
  ) {}

  login() {
    this._authenticationService.logIn(this.form.value).subscribe(
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
