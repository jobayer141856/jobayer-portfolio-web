import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileApiService } from './data-access/profile-api.service';
import { ProjectsApiService } from '../projects/data-access/projects-api.service';
import { ExperiencesApiService } from '../experience/data-access/experiences-api.service';
import { SkillsApiService } from '../skills/data-access/skills-api.service';
import { MetaService } from '../../core/services/meta.service';
import { AsyncState } from '../../core/models/async-state.model';
import { Profile } from '../../core/models/profile.model';
import { Project } from '../../core/models/project.model';
import { Experience } from '../../core/models/experience.model';
import { SkillGroup } from '../../core/models/skill.model';
import { LoadingSkeleton } from '../../shared/components/loading-skeleton/loading-skeleton';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { InlineError } from '../../shared/components/inline-error/inline-error';
import { Tag } from '../../shared/components/tag/tag';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LoadingSkeleton, EmptyState, InlineError, Tag],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly profileApi = inject(ProfileApiService);
  private readonly projectsApi = inject(ProjectsApiService);
  private readonly experiencesApi = inject(ExperiencesApiService);
  private readonly skillsApi = inject(SkillsApiService);
  private readonly meta = inject(MetaService);

  readonly profileState = signal<AsyncState<Profile>>({ status: 'loading' });
  readonly projectsState = signal<AsyncState<readonly Project[]>>({ status: 'loading' });
  readonly experiencesState = signal<AsyncState<readonly Experience[]>>({ status: 'loading' });
  readonly skillsState = signal<AsyncState<readonly SkillGroup[]>>({ status: 'loading' });

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Home',
      description:
        'Professional portfolio of Jobayer — Software Engineer and Full Stack Developer.',
    });
    this.loadAll();
  }

  loadAll(): void {
    this.loadProfile();
    this.loadFeaturedProjects();
    this.loadExperiences();
    this.loadSkills();
  }

  loadProfile(): void {
    this.profileState.set({ status: 'loading' });
    this.profileApi.getProfile().subscribe({
      next: (data) => this.profileState.set({ status: 'success', data }),
      error: (err: Error) => this.profileState.set({ status: 'error', message: err.message }),
    });
  }

  loadFeaturedProjects(): void {
    this.projectsState.set({ status: 'loading' });
    this.projectsApi.getFeaturedProjects().subscribe({
      next: (data) => this.projectsState.set({ status: 'success', data }),
      error: (err: Error) => this.projectsState.set({ status: 'error', message: err.message }),
    });
  }

  loadExperiences(): void {
    this.experiencesState.set({ status: 'loading' });
    this.experiencesApi.getExperiences().subscribe({
      next: (data) => this.experiencesState.set({ status: 'success', data: data.slice(0, 3) }),
      error: (err: Error) => this.experiencesState.set({ status: 'error', message: err.message }),
    });
  }

  loadSkills(): void {
    this.skillsState.set({ status: 'loading' });
    this.skillsApi.getSkillGroups().subscribe({
      next: (data) => this.skillsState.set({ status: 'success', data }),
      error: (err: Error) => this.skillsState.set({ status: 'error', message: err.message }),
    });
  }
}
