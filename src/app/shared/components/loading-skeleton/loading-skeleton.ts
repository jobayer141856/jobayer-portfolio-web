import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-skeleton',
  imports: [],
  templateUrl: './loading-skeleton.html',
  styleUrl: './loading-skeleton.css',
})
export class LoadingSkeleton {
  readonly count = input<number>(3);
  readonly height = input<string>('h-6');

  get items(): readonly number[] {
    return Array.from({ length: this.count() }, (_, i) => i);
  }
}
