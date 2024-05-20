import { Routes } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
 { path: '', component: LoginPageComponent, title: 'login' },
 { path: 'sign-up', component: SignUpPageComponent, title: 'sign up' }
];
