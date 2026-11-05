import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Publication } from '../../../core/models/publication.model';

@Injectable({
  providedIn: 'root',
})
export class PublicationsApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getPublications(): Observable<readonly Publication[]> {
    return this.http.get<readonly Publication[]>(`${this.baseUrl}/api/v1/publications`);
  }
}
