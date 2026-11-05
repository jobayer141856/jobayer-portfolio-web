import { Component, OnInit, inject, signal } from '@angular/core';
import { EducationApiService } from './data-access/education-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { Education } from '../../core/models/education.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { InlineError } from '../../shared/components/inline-error/inline-error';

@Component({
  selector: 'app-education',
  imports: [LoadingSkeleton, EmptyState, InlineError],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class EducationComponent implements OnInit {
  private readonly api = inject(EducationApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<readonly Education[]>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Education',
      description: 'Academic background, university degrees, and formal education of Jobayer.',
    });
    this.loadEducation();
  }

  loadEducation(): void {
    this.state.set({ status: 'loading' });
    this.api.getEducation().subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }
}
