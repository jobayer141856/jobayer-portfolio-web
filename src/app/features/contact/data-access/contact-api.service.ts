import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../core/config/api-config.token';
import { ContactMessage, ContactResponse } from '../../../core/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  sendMessage(payload: ContactMessage): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${this.baseUrl}/api/v1/contact`, payload);
  }
}
