import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-inline-error',
  imports: [],
  templateUrl: './inline-error.html',
  styleUrl: './inline-error.css',
})
export class InlineError {
  readonly message = input<string>('Unable to load content at this moment.');
  readonly retry = output<void>();
}
