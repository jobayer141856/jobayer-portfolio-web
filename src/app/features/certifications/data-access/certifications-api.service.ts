import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Certification } from '../../../core/models/certification.model';
import { MOCK_CERTIFICATIONS } from '../../../core/mock/portfolio-mock-data';

@Injectable({
  providedIn: 'root',
})
export class CertificationsApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getCertifications(): Observable<readonly Certification[]> {
    return this.http.get<readonly Certification[]>(`${this.baseUrl}/api/v1/certifications`).pipe(
      catchError(() => of(MOCK_CERTIFICATIONS)),
    );
  }
}
