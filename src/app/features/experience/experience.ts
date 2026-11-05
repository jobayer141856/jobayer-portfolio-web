import { Component, OnInit, inject, signal } from '@angular/core';
import { ExperiencesApiService } from './data-access/experiences-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { Experience } from '../../core/models/experience.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { InlineError } from '../../shared/components/inline-error/inline-error';
import { Tag } from '../../shared/components/tag/tag';

@Component({
  selector: 'app-experience',
  imports: [LoadingSkeleton, EmptyState, InlineError, Tag],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent implements OnInit {
  private readonly api = inject(ExperiencesApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<readonly Experience[]>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Experience',
      description:
        'Career history, software engineering roles, responsibilities, and technical achievements of Jobayer.',
    });
    this.loadExperiences();
  }

  loadExperiences(): void {
    this.state.set({ status: 'loading' });
    this.api.getExperiences().subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }
}
