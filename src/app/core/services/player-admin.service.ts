import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class PlayerAdminService {

  private baseURL = 'http://localhost:8080/';

  protected constructor(protected readonly http: HttpClient) {
  }

  protected abstract getEndpoint(): string;

  protected getServiceURL(): string {
    return this.baseURL + this.getEndpoint();
  }
}
