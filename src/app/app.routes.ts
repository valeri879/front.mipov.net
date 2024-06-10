import { Routes } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { authGuard } from './guards/auth.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { loginGuard } from './guards/login.guard';
import { LinksPageComponent } from './pages/links-page/links-page.component';
import { PublicPageComponent } from './pages/public-page/public-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';

export const routes: Routes = [
 { path: '', component: SignUpPageComponent, title: 'Share your social accounts profiles with mipov.net', canActivate: [ loginGuard ] },
 { path: 'login', component: LoginPageComponent, title: 'Login to mipov.net', canActivate: [ loginGuard ] },
 { path: 'error', component: ErrorPageComponent, title: 'Error' },
 { path: 'privacy-policy', component: PrivacyPolicyPageComponent, title: 'Privacy policy' },
 { path: 'help', component: HelpPageComponent, title: 'Help - mipov.net' },
 { path: 'profile', component: ProfilePageComponent, title: 'Privacy policy', canActivate: [ authGuard ] },
 { path: 'links', component: LinksPageComponent, title: 'Links', canActivate: [ authGuard ] },
 { path: ':userName', component: PublicPageComponent, title: 'Links' },
];