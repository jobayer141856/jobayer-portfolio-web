import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Experience } from '../../../core/models/experience.model';
import { MOCK_EXPERIENCES } from '../../../core/mock/portfolio-mock-data';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getExperiences(): Observable<readonly Experience[]> {
    return this.http.get<readonly Experience[]>(`${this.baseUrl}/api/v1/experiences`).pipe(
      map((res) => (res && res.length > 0 ? res : MOCK_EXPERIENCES)),
      catchError(() => of(MOCK_EXPERIENCES)),
    );
  }
}
