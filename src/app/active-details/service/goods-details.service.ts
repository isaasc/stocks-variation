import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/Result.interface';
import { Chart } from '../models/Chart.interface';
import { ChartResponse } from '../models/ChartResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GoodsDetailsService {
  private readonly corsHeroku: string = 'https://cors-anywhere.herokuapp.com';
  private readonly corsDomain = 'finance.yahoo.com';
  private readonly urlApi: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getChart(symbol: string, period1: number, period2:number, interval: string): Observable<ChartResponse> {
    const useYfid: boolean = true;
    const includedPrePost: boolean = true;
    return this.http.get<ChartResponse>(`${this.corsHeroku}/${this.urlApi}/v8/finance/chart/${symbol}?symbol=${symbol}&period1=${period1}&period2=${period2}&useYfid=${useYfid}&interval=${interval}&includedPrePost=${includedPrePost}&corsDomain=${this.corsDomain}`)
  }
  getResult(symbol: string, period1: number, period2:number, interval: string): Observable<Result> {
    return this.getChart(symbol, period1, period2, interval)
      .pipe(
        map(chart => chart.chart.result[0]));
  }
}
