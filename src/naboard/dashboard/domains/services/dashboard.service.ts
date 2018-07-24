import { Injectable } from '@angular/core';
import { NaboardApiClient } from '../client';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
    public constructor(private api: NaboardApiClient) {}

    public fetchData(): Observable<any> {
        return this.api.get<any>('http://localhost:8000/api/v1/dashboards');
    }
}
