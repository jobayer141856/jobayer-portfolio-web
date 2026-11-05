import { Component, OnInit, inject, signal } from '@angular/core';
import { PublicationsApiService } from './data-access/publications-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { Publication } from '../../core/models/publication.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { InlineError } from '../../shared/components/inline-error/inline-error';

@Component({
  selector: 'app-publications',
  imports: [LoadingSkeleton, EmptyState, InlineError],
  templateUrl: './publications.html',
  styleUrl: './publications.css',
})
export class Publications implements OnInit {
  private readonly api = inject(PublicationsApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<readonly Publication[]>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Publications',
      description:
        'Peer-reviewed research papers, conference proceedings, and publications by Jobayer.',
    });
    this.loadPublications();
  }

  loadPublications(): void {
    this.state.set({ status: 'loading' });
    this.api.getPublications().subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }
}
