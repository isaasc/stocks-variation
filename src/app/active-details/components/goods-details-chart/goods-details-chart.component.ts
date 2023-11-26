import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Result } from '../../models/Result.interface';
import { Indicator } from '../../models/Indicator.interface';

@Component({
  selector: 'app-goods-details-chart',
  templateUrl: './goods-details-chart.component.html',
  styleUrls: ['./goods-details-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsDetailsChartComponent implements OnChanges {
  @ViewChild("canvas", {static: true}) canvas!: ElementRef;
  @Input() goods!: Result;

  constructor() {}

  ngOnChanges(): void {
    this.createChart(this.goods);
  }

  createChart(chart: Result) {
    new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.handleTimestamps(chart.timestamp),
        datasets: [{
          label: 'Open',
          data: this.showIndicatorsQuoteOpen(chart.indicators),
          borderColor:'#133A3B',
          backgroundColor:'#133A3B80',
          fill: false,
          borderWidth: 2,
          order: 0
        },
        {
          label: 'Variação D-1',
          data: this.calcularVariacaoDiaAnterior(chart.indicators),
          borderColor: '#f2c110',
          backgroundColor: '#f2c11080',
          fill: false,
          order: 1,
          borderDash: [5, 5],
          type: 'line',
        },
        {
          label: 'Variação primeira data',
          data: this.calcularVariacaoPrimeiraData(chart.indicators),
          order: 2,
          borderColor: '#5a189a',
          backgroundColor: '#5a189a80',
          fill: false,
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
    });
  }

  calcularVariacaoDiaAnterior(indicators: Indicator): number[] {
    const variacoesDiaAnterior: number[] = [];
    const openPrices: number[] = indicators.quote[0].open.map((open) => Number(open));
    variacoesDiaAnterior.push(0);

    for (let i = 1; i < openPrices.length; i++) {
      const variacaoDiaAnterior = ((openPrices[i] - openPrices[i - 1]) / openPrices[i - 1]) * 100;
      variacoesDiaAnterior.push(Number(variacaoDiaAnterior.toFixed(2)));
    }

    return variacoesDiaAnterior;
  }

  showIndicatorsQuoteOpen(indicators: Indicator): any {
    const openPrices = indicators.quote[0].open.map((open) => Number(open).toFixed(2));
    return openPrices;
  }

  calcularVariacaoPrimeiraData(indicators: Indicator): number[] {
    const variacoesPrimeiraData: number[] = [];
    const openPrices: number[] = indicators.quote[0].open.map((open) => Number(open));

    if (openPrices.length === 0) {
      return variacoesPrimeiraData;
    }

    const valorPrimeiraData: number = openPrices[0];
    variacoesPrimeiraData.push(0);

    for (let i = 1; i < openPrices.length; i++) {
      const variacaoPrimeiraData: number = ((openPrices[i] - valorPrimeiraData) / valorPrimeiraData) * 100;
      variacoesPrimeiraData.push(Number(variacaoPrimeiraData.toFixed(2)));
    }

    return variacoesPrimeiraData;
  }

  calculateCumulativeVariation(chart: string[]): number[] {
    const openPrices = chart.map((open) => Number(open));
    const cumulativeVariation: number[] = [0];

    if (chart.length === 0) {
      return cumulativeVariation;
    }

    for (let i = 1; i < openPrices.length; i++) {
      const dailyVariation: number = ((openPrices[i] - openPrices[i - 1]) / openPrices[i - 1]) * 100;
      const cumulativeValue: number = cumulativeVariation[i - 1] + dailyVariation;
      cumulativeVariation.push(Number(cumulativeValue.toFixed(2)));
    }

    return cumulativeVariation;
  }

  handleTimestamps(timestamps: string[]) {
    return timestamps.map((timestamp) =>  {
      const data = new Date(Number(timestamp) * 1000);
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');

      return `${dia}/${mes}`;
    });
  }
}
