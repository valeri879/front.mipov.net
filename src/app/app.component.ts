import { Component, inject, OnInit } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthenticationService } from './services/authentication.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { UserMenuDropdownComponent } from './components/user-menu-dropdown/user-menu-dropdown.component';
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
export class AppComponent implements OnInit{
  public authenticationService = inject(AuthenticationService);

  public show: boolean = false;

  ngOnInit(): void {
  }
}
