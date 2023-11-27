// import { TestBed } from '@angular/core/testing';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { GoodsDetailsService } from './goods-details.service';
// import { Result } from '../models/Result.interface';

// describe('GoodsDetailsService', () => {
//   let service: GoodsDetailsService;
//   let http: HttpClient;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         GoodsDetailsService,
//         { provide: HttpClient, useValue: new HttpClientTestingModule().create() }
//       ]
//     });

//     service = TestBed.inject(GoodsDetailsService);
//     http = TestBed.inject(HttpClient);
//   });

//   it('should get chart data', () => {
//     const symbol = 'AAPL';
//     const period1 = 1440;
//     const period2 = 18000;
//     const interval = '1m';

//     const chartResponse: Result = {
//       date: '2023-11-27',
//       high: 135.23,
//       low: 132.34,
//       open: 133.45,
//       close: 134.12,
//       volume: 12345678
//     };

//     const httpSpy = spyOn(http, 'get').and.returnValue(of({ chart: { result: [chartResponse] } }));

//     service.getResult(symbol, period1, period2, interval).subscribe(result => {
//       expect(result).toEqual(chartResponse);
//     });

//     expect(httpSpy).toHaveBeenCalledWith('https://cors-anywhere.herokuapp.com/https://api.finance.yahoo.com/v8/finance/chart', {
//       params: new HttpParams()
//         .set('useYfid', true)
//         .set('includedPrePost', true)
//         .set('symbol', symbol)
//         .set('period1', period1)
//         .set('period2', period2)
//         .set('interval', interval)
//     });
//   });
// });
