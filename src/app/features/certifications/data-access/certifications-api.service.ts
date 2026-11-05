import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { Certification } from '../../../core/models/certification.model';

@Injectable({
  providedIn: 'root',
})
export class CertificationsApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  getCertifications(): Observable<readonly Certification[]> {
    return this.http.get<readonly Certification[]>(`${this.baseUrl}/api/v1/certifications`);
  }
}
