import { Component, OnInit, inject, signal } from '@angular/core';
import { SkillsApiService } from './data-access/skills-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { SkillGroup } from '../../core/models/skill.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { InlineError } from '../../shared/components/inline-error/inline-error';
import { Tag } from '../../shared/components/tag/tag';

@Component({
  selector: 'app-skills',
  imports: [LoadingSkeleton, EmptyState, InlineError, Tag],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  private readonly api = inject(SkillsApiService);
  private readonly meta = inject(MetaService);

  readonly state = signal<AsyncState<readonly SkillGroup[]>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Skills & Capabilities',
      description:
        'Technical skills, programming languages, database technologies, and developer tooling of Jobayer.',
    });
    this.loadSkills();
  }

  loadSkills(): void {
    this.state.set({ status: 'loading' });
    this.api.getSkillGroups().subscribe({
      next: (data) => this.state.set({ status: 'success', data }),
      error: (err: Error) => this.state.set({ status: 'error', message: err.message }),
    });
  }
}
