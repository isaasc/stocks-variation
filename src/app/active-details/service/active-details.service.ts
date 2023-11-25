import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiveDetailsService {

  constructor(private http: HttpClient) { }

  getChart(activeCode: string): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/v8/finance/chart/${activeCode}`)
  }
}
