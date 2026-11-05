import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsApiService } from '../../data-access/projects-api.service';
import { MetaService } from '../../../../core/services/meta.service';
import { AsyncState } from '../../../../core/models/async-state.model';
import { Project } from '../../../../core/models/project.model';
import { LoadingSkeleton } from '../../../../shared/components/loading-skeleton/loading-skeleton';
import { InlineError } from '../../../../shared/components/inline-error/inline-error';
import { Tag } from '../../../../shared/components/tag/tag';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, LoadingSkeleton, InlineError, Tag],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(ProjectsApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<Project>>({ status: 'loading' });
  private currentSlug = '';

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.currentSlug = slug;
      this.loadProject(slug);
    } else {
      this.state.set({ status: 'error', message: 'No project slug specified.' });
    }
  }

  loadProject(slug: string): void {
    this.state.set({ status: 'loading' });
    this.api.getProjectBySlug(slug).subscribe({
      next: (project) => {
        this.state.set({ status: 'success', data: project });
        this.meta.setPageMeta({
          title: project.title,
          description: project.shortSummary,
          ogImage: project.coverImageUrl,
        });
      },
      error: (err: Error) => {
        this.state.set({ status: 'error', message: err.message });
      },
    });
  }

  retry(): void {
    if (this.currentSlug) {
      this.loadProject(this.currentSlug);
    }
  }
}
