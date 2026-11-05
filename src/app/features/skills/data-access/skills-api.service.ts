import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { SkillGroup } from '../../../core/models/skill.model';
import { MOCK_SKILLS } from '../../../core/mock/portfolio-mock-data';

@Injectable({
  providedIn: 'root',
})
export class SkillsApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getSkillGroups(): Observable<readonly SkillGroup[]> {
    return this.http.get<readonly SkillGroup[]>(`${this.baseUrl}/api/v1/skills`).pipe(
      catchError(() => of(MOCK_SKILLS)),
    );
  }
}
