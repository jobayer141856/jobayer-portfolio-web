import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Experience } from '../../../core/models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getExperiences(): Observable<readonly Experience[]> {
    return this.http.get<readonly Experience[]>(`${this.baseUrl}/api/v1/experiences`);
  }
}
