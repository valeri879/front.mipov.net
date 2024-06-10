import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HelpService } from '../../services/help.service';
import { Help } from '../../interfaces/help';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor
  ],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss'
})
export class HelpPageComponent {
  helpService = inject(HelpService);

  help$: Observable<Help[]> = this.helpService.help();
}
