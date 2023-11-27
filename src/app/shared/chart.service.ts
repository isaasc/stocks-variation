import { Injectable } from '@angular/core';
import { ChartConfiguration, ChartTypeRegistry } from 'chart.js';
import { Chart } from 'chart.js/auto';
import { Result } from '../active-details/models/Result.interface';
import { TimestampUtility } from '../core/utilities/timestamp.utility';
import { NumberUtility } from '../core/utilities/number.utility';
import { VariationService } from '../active-details/service/variation.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private timestampUtility: TimestampUtility, private numberUtility: NumberUtility, private variationService: VariationService) { }

  createChartPriceVariationWithDailyVariationAndVariationFromFirstDate(chart: Result): ChartConfiguration<keyof ChartTypeRegistry> {
    return {
      type: 'line',
      data: {
        labels: this.timestampUtility.formatTimestampsForDisplay(chart.timestamp),
        datasets: [{
          label: 'Open',
          data: chart.indicators.quote[0].open.map((open: string) => Number(this.numberUtility.formatNumber(Number(open), 2))),
          borderColor:'#133A3B',
          backgroundColor:'#133A3B40',
          fill: 'start',
          borderWidth: 2,
          order: 2
        },
        {
          label: 'Variação D-1',
          data: this.variationService.calculateDailyVariation(chart.indicators),
          borderColor: '#f2c110',
          backgroundColor: '#f2c11080',
          order: 0,
          borderDash: [5, 5],
          type: 'line',
        },
        {
          label: 'Variação primeira data',
          data: this.variationService.calculateVariationFromFirstDate(chart.indicators),
          order: 1,
          borderColor: '#5a189a',
          backgroundColor: '#5a189a80',
          borderDash: [5, 5],
          type: 'line',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Variação de preço'
          }
        },
        scales: {
          y: {
            ticks: {
              stepSize: 8
            }
          }
        }
      },
    };
  }

  renderChart(element: any, chartConfig: any): Chart {
    return new Chart(element, chartConfig);
  }
}
