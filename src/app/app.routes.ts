import { Routes } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
 { path: '', component: LoginPageComponent, title: 'login' },
 { path: 'sign-up', component: SignUpPageComponent, title: 'sign up' },
 { path: 'profile', component: ProfilePageComponent, title: 'profile', canActivate: [ authGuard ] }
];
