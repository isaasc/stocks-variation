import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/Result.interface';
import { Chart } from '../models/Chart.interface';

@Injectable({
  providedIn: 'root'
})
export class ActiveDetailsService {
  private readonly corsHeroku: string = 'https://cors-anywhere.herokuapp.com';
  private readonly urlApi: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getChart(activeCode: string): Observable<Chart> {
    return this.http.get<Chart>(`${this.corsHeroku}/${this.urlApi}/v8/finance/chart/${activeCode}`)
  }

  getResult(activeCode: string): Observable<Result[]> {
    return this.getChart(activeCode)
      .pipe(map(chart => chart.result));
  }
}
