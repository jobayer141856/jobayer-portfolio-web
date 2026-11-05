import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileApiService } from '../home/data-access/profile-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { Profile } from '../../core/models/profile.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { InlineError } from '../../shared/components/inline-error/inline-error';

@Component({
  selector: 'app-about',
  imports: [RouterLink, LoadingSkeleton, InlineError],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  private readonly profileApi = inject(ProfileApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<Profile>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'About',
      description:
        'Learn more about Jobayer — professional background, software engineering focus, and background.',
    });
    this.loadProfile();
  }

  loadProfile(): void {
    this.state.set({ status: 'loading' });
    this.profileApi.getProfile().subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }
}
