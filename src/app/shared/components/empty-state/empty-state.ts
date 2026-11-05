import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.css',
})
export class EmptyState {
  readonly title = input<string>('No entries found');
  readonly message = input<string>(
    'There is currently no published content available in this section.',
  );
}
