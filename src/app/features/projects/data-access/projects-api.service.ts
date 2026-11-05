import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Project } from '../../../core/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getProjects(category?: string): Observable<readonly Project[]> {
    const url = category
      ? `${this.baseUrl}/api/v1/projects?category=${encodeURIComponent(category)}`
      : `${this.baseUrl}/api/v1/projects`;
    return this.http.get<readonly Project[]>(url);
  }

  getFeaturedProjects(): Observable<readonly Project[]> {
    return this.http.get<readonly Project[]>(`${this.baseUrl}/api/v1/projects?featured=true`);
  }

  getProjectBySlug(slug: string): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/api/v1/projects/${encodeURIComponent(slug)}`);
  }
}
