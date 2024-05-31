import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-menu-dropdown',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user-menu-dropdown.component.html',
  styleUrl: './user-menu-dropdown.component.scss'
})
export class UserMenuDropdownComponent {
  authenticationService = inject(AuthenticationService);

  toggle: boolean = false;
}
