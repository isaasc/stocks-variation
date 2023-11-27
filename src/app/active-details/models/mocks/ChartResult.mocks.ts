
import { Result } from "../Result.interface";
import { ChartResponse } from "../ChartResponse.interface";
import { Indicator } from "../Indicator.interface";
import { Chart } from "../Chart.interface";
import { Meta } from "../Meta.interface";

export const metaMock: Meta = {
  symbol: 'AAPL',
};

export const indicatorMock: Indicator = {
  quote: [
    {
      close: ['150.00', '155.00'],
      high: ['160.00', '165.00'],
      low: ['140.00', '145.00'],
      open: ['100', '110', '120'],
    },
  ],
};

export const resultMock: Result = {
  meta: metaMock,
  timestamp: ['1638000000', '1638086400'],
  indicators: indicatorMock,
};

export const chartMock: Chart = {
  result: [resultMock],
};

export const chartResponseMock: ChartResponse = {
  chart: chartMock,
};
