import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsApiService } from '../../data-access/projects-api.service';
import { MetaService } from '../../../../core/services/meta.service';
import { AsyncState } from '../../../../core/models/async-state.model';
import { Project } from '../../../../core/models/project.model';
import { LoadingSkeleton } from '../../../../shared/components/loading-skeleton/loading-skeleton';
import { EmptyState } from '../../../../shared/components/empty-state/empty-state';
import { InlineError } from '../../../../shared/components/inline-error/inline-error';
import { Tag } from '../../../../shared/components/tag/tag';

@Component({
  selector: 'app-project-list',
  imports: [RouterLink, LoadingSkeleton, EmptyState, InlineError, Tag],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList implements OnInit {
  private readonly api = inject(ProjectsApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<readonly Project[]>>({ status: 'loading' });
  readonly selectedCategory = signal<string>('All');

  readonly categories = computed<readonly string[]>(() => {
    const s = this.state();
    if (s.status !== 'success' || !s.data) return ['All'];
    const cats = new Set<string>();
    for (const p of s.data) {
      if (p.category) cats.add(p.category);
    }
    return ['All', ...Array.from(cats)];
  });

  readonly filteredProjects = computed<readonly Project[]>(() => {
    const s = this.state();
    if (s.status !== 'success' || !s.data) return [];
    const cat = this.selectedCategory();
    if (cat === 'All') return s.data;
    return s.data.filter((p) => p.category?.toLowerCase() === cat.toLowerCase());
  });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Projects',
      description:
        'Explore software engineering projects, web applications, and backend systems developed by Jobayer.',
    });
    this.loadProjects();
  }

  loadProjects(): void {
    this.state.set({ status: 'loading' });
    this.api.getProjects().subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
