import { Component, OnInit, inject, signal } from '@angular/core';
import { CertificationsApiService } from './data-access/certifications-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { Certification } from '../../core/models/certification.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { InlineError } from '../../shared/components/inline-error/inline-error';

@Component({
  selector: 'app-certifications',
  imports: [LoadingSkeleton, EmptyState, InlineError],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications implements OnInit {
  private readonly api = inject(CertificationsApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<readonly Certification[]>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Certifications',
      description:
        'Professional engineering certifications, industry credentials, and recognized achievements.',
    });
    this.loadCertifications();
  }

  loadCertifications(): void {
    this.state.set({ status: 'loading' });
    this.api.getCertifications().subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }
}
