import { Component, OnInit, inject, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProfileApiService } from '../home/data-access/profile-api.service';
import { ExperiencesApiService } from '../experience/data-access/experiences-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { Profile } from '../../core/models/profile.model';
import { Experience } from '../../core/models/experience.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { InlineError } from '../../shared/components/inline-error/inline-error';
import { Tag } from '../../shared/components/tag/tag';

export interface AboutData {
  readonly profile: Profile;
  readonly experiences: readonly Experience[];
}

@Component({
  selector: 'app-about',
  imports: [LoadingSkeleton, InlineError, Tag],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  private readonly profileApi = inject(ProfileApiService);
  private readonly experiencesApi = inject(ExperiencesApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<AboutData>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'About',
      description:
        'Learn more about Jobayer — professional background, software engineering focus, and background.',
    });
    this.loadData();
  }

  loadData(): void {
    this.state.set({ status: 'loading' });
    forkJoin({
      profile: this.profileApi.getProfile(),
      experiences: this.experiencesApi.getExperiences(),
    }).subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }
}
