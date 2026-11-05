import { Component, input } from '@angular/core';
import { SocialLink } from '../../../core/models/profile.model';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  readonly links = input.required<readonly SocialLink[]>();
}
