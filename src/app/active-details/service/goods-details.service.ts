import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Result } from '../models/Result.interface';
import { ChartResponse } from '../models/ChartResponse.interface';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class GoodsDetailsService {
  private readonly corsDomain = 'finance.yahoo.com';
  private readonly urlApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getChart(symbol: string, period1: number, period2:number, interval: string): Observable<ChartResponse> {
    const params = new HttpParams()
    .set('symbol', symbol)
    .set('period1', period1.toString())
    .set('period2', period2.toString())
    .set('useYfid', 'true')
    .set('interval', interval)
    .set('includedPrePost', 'true')
    .set('corsDomain', this.corsDomain);

    const url: string = `${this.urlApi}/chart/${symbol}`;

    return this.http.get<ChartResponse>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getResult(symbol: string, period1: number, period2:number, interval: string): Observable<Result> {
    return this.getChart(symbol, period1, period2, interval)
      .pipe(
        map(chart => chart.chart.result[0]),
        catchError(this.handleError)
      );
  }

  handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong; Please try again later.');
  }
}
