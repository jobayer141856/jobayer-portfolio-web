import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  imports: [],
  templateUrl: './page-container.html',
  styleUrl: './page-container.css',
})
export class PageContainer {
  readonly className = input<string>('');
}
