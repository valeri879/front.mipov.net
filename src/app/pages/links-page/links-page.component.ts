import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { User } from '../../interfaces/user';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-links-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './links-page.component.html',
  styleUrl: './links-page.component.scss'
})
export class LinksPageComponent implements OnInit {
  profileService = inject(ProfileService);
  formBuilder = inject(FormBuilder);

  linksFormGroup = this.formBuilder.group({
    links: new FormArray([])
  });

  user$!: Observable<User>;
  
  log(e: any) {
    console.log(e)
  }
  ngOnInit(): void {
    this.user$ = this.profileService.profile().pipe(
      tap(({ links }) => {
        links?.forEach(linksData => {
          this.links.push(this.formBuilder.group({
            link: new FormControl(linksData.link),
            linkTitle: new FormControl(linksData.linkTitle),
            linkIcon: new FormControl(linksData.linkIcon),
          }))
        });
        console.log(this.links.value);
      })
    ); 
  }

  get links(): FormArray {
    return this.linksFormGroup.get('links') as FormArray;
  }
}
