import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { User } from '../../interfaces/user';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  private _profileService = inject(ProfileService);
  private _formBuilder = inject(FormBuilder);

  public linksFormGroup = this._formBuilder.group({ links: new FormArray([]) });
  public addLinksFormGroup: FormGroup = this._linksGroup();

  user$!: Observable<User>;
  
  ngOnInit(): void {
    this.user$ = this._profileService.profile().pipe(
      tap(({ links }) => {
        links.forEach(linksData => {
          this.links.push(this._linksGroup(linksData.link, linksData.linkTitle, linksData.linkIcon))
        });
      })
    ); 
  }

  private _linksGroup(link: string = '', linktitle: string = '', linkIcon: string = ''): FormGroup {
    return new FormGroup({
      link: new FormControl(link, [Validators.required]),
      linkTitle: new FormControl(linktitle, [Validators.required]),
      linkIcon: new FormControl(linkIcon, [Validators.required]),
    });
  }

  get links(): FormArray {
    return this.linksFormGroup.get('links') as FormArray;
  }

  addLinks(data: any) {
    const group = this._linksGroup(data.link, data.linkTitle, data.linkIcon);
    this.links.push(group);
    this.addLinksFormGroup.reset();
    // update links
    this._profileService.updateLinks(this.linksFormGroup.value).subscribe();
  }

  removeLink(index: number) {
    this.links.removeAt(index);
    // update links
    this._profileService.updateLinks(this.linksFormGroup.value).subscribe();
  }
}
