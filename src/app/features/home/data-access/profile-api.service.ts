import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Profile } from '../../../core/models/profile.model';
import { MOCK_PROFILE } from '../../../core/mock/portfolio-mock-data';

@Injectable({
  providedIn: 'root',
})
export class ProfileApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/api/v1/profile`).pipe(
      catchError(() => of(MOCK_PROFILE)),
    );
  }
}
