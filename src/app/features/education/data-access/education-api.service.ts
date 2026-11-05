import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Education } from '../../../core/models/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getEducation(): Observable<readonly Education[]> {
    return this.http.get<readonly Education[]>(`${this.baseUrl}/api/v1/educations`);
  }
}
