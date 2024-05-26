import { Routes } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { authGuard } from './guards/auth.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';

export const routes: Routes = [
 { path: '', component: LoginPageComponent, title: 'login' },
 { path: 'sign-up', component: SignUpPageComponent, title: 'sign up' },
 { path: 'error', component: ErrorPageComponent, title: 'Error' },
 { path: 'privacy-policy', component: PrivacyPolicyPageComponent, title: 'Privacy policy' },
 { path: ':userName', component: ProfilePageComponent, title: 'profile', canActivate: [ authGuard ] }
];
