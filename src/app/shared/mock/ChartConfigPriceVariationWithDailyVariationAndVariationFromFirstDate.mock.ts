import { ChartConfiguration, ChartTypeRegistry } from "chart.js";

export const chartConfigPriceVariationWithDailyVariationAndVariationFromFirstDateMock: ChartConfiguration<keyof ChartTypeRegistry> = {
  type: 'line',
      data: {
        labels: ['11/10', '12/10'],
        datasets: [{
          label: 'Open',
          data: [10, 20],
          borderColor:'#133A3B',
          backgroundColor:'#133A3B40',
          fill: 'start',
          borderWidth: 2,
          order: 2
        },
        {
          label: 'Variação D-1',
          data: [10, 20],
          borderColor: '#f2c110',
          backgroundColor: '#f2c11080',
          order: 0,
          borderDash: [5, 5],
          type: 'line',
        },
        {
          label: 'Variação primeira data',
          data: [10, 20],
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
    }
