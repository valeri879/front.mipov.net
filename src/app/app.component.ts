import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthenticationService } from './services/authentication.service';
import { AsyncPipe } from '@angular/common';
import { UserMenuDropdownComponent } from './components/user-menu-dropdown/user-menu-dropdown.component';

type ThemeMode = 'light' | 'dark' | 'system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainPageComponent,
    UserMenuDropdownComponent,
    RouterModule,
    RouterLinkActive,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  public authenticationService = inject(AuthenticationService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeStorageKey = 'theme-mode';
  private mediaQueryList?: MediaQueryList;

  public show: boolean = false;
  public themeMode: ThemeMode = 'system';

  ngOnInit(): void {
    this.initThemeMode();
    this.applyTheme();
  }

  ngOnDestroy(): void {
    if (this.mediaQueryList) {
      this.mediaQueryList.removeEventListener('change', this.handleSystemThemeChange);
    }
  }

  public setThemeMode(mode: ThemeMode): void {
    this.themeMode = mode;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.themeStorageKey, mode);
    }
    this.applyTheme();
  }

  private initThemeMode(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedMode = localStorage.getItem(this.themeStorageKey);
    if (savedMode === 'light' || savedMode === 'dark' || savedMode === 'system') {
      this.themeMode = savedMode;
    }

    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryList.addEventListener('change', this.handleSystemThemeChange);
  }

  private applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const isSystemDark = this.mediaQueryList?.matches ?? false;
    const resolvedTheme = this.themeMode === 'system'
      ? (isSystemDark ? 'dark' : 'light')
      : this.themeMode;

    document.documentElement.setAttribute('data-bs-theme', resolvedTheme);
  }

  private handleSystemThemeChange = (): void => {
    if (this.themeMode === 'system') {
      this.applyTheme();
    }
  };
}
