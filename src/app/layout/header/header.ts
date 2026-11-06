import { Component, HostListener, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileApiService } from '../../features/home/data-access/profile-api.service';
import { Profile } from '../../core/models/profile.model';

interface NavItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private readonly profileApi = inject(ProfileApiService);

  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly profile = signal<Profile | null>(null);
  readonly resumeUrl = signal<string | null>(null);

  readonly brandName = computed(() => this.profile()?.displayName || 'Jobayer');
  readonly brandInitial = computed(() => {
    const name = this.profile()?.displayName?.trim();
    return name ? name.charAt(0).toUpperCase() : 'J';
  });

  readonly navLinks: readonly NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Education', path: '/education' },
    { label: 'Publications', path: '/publications' },
    { label: 'Contact', path: '/contact' },
  ];

  ngOnInit(): void {
    this.profileApi.getProfile().subscribe({
      next: (profile) => {
        this.profile.set(profile);
        this.resumeUrl.set(profile?.resumeUrl || null);
      },
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobileMenu();
  }
}
