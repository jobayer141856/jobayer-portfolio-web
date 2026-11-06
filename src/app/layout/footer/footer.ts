import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileApiService } from '../../features/home/data-access/profile-api.service';
import { Profile } from '../../core/models/profile.model';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  private readonly profileApi = inject(ProfileApiService);

  readonly currentYear = new Date().getFullYear();
  readonly profile = signal<Profile | null>(null);

  readonly socialLinks = computed(() => {
    const p = this.profile();
    if (p && p.socialLinks && p.socialLinks.length > 0) {
      return p.socialLinks.map((s) => ({
        label: s.platform || s.label || 'Link',
        url: s.url,
        icon: (s.platform || 'link').toLowerCase(),
      }));
    }
    return [
      { label: 'GitHub', url: 'https://github.com/jobayer141856', icon: 'github' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/jobayer-hossen', icon: 'linkedin' },
    ];
  });

  ngOnInit(): void {
    this.profileApi.getProfile().subscribe({
      next: (data) => this.profile.set(data),
      error: () => {},
    });
  }
}
