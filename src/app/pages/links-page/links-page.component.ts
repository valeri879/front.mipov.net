import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-links-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    JsonPipe
  ],
  templateUrl: './links-page.component.html',
  styleUrl: './links-page.component.scss'
})
export class LinksPageComponent implements OnInit {
  profileService = inject(ProfileService);

  user$!: Observable<User>;
  
  ngOnInit(): void {
    this.user$ = this.profileService.profile(); 
  }
}
