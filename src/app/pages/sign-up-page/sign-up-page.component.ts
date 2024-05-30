import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterModule } from '@angular/router';
import { JsonPipe, NgIf } from '@angular/common';

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
  providers: [

  ]
})
export class SignUpPageComponent implements OnInit{
  public form!: FormGroup;

  constructor(
    private _authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern(new RegExp('^[a-zA-Z0-9]+$'))]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(55)]),
  });

  }

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

  get userName(): FormControl {
    return this.form.controls['userName'] as FormControl;
  }
}
