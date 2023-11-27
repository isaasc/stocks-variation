import { Injectable } from '@angular/core';
import { Indicator } from '../models/Indicator.interface';
import { NumberUtility } from 'src/app/core/utilities/number.utility';

@Injectable({
  providedIn: 'root'
})
export class VariationService {

  constructor(private numberUtility: NumberUtility) { }

  calculateDailyVariation(indicators: Indicator): number[] {
    const dailyVariations: number[] = [];
    const openPrices: number[] = indicators.quote[0].open.map((open) => Number(open));
    dailyVariations.push(0);

    for (let i = 1; i < openPrices.length; i++) {
      const variation: number = this.numberUtility.calculatePercentageChange(openPrices[i - 1], openPrices[i]);
      dailyVariations.push(Number(variation.toFixed(2)));
    }

    return dailyVariations;
  }

  calculateVariationFromFirstDate(indicators: Indicator): number[] {
    const variationsFromFirstDate: number[] = [];
    const openPrices: number[] = indicators.quote[0].open.map((open) => Number(open));

    if (openPrices.length === 0) {
      return variationsFromFirstDate;
    }

    const initialValue: number = openPrices[0];
    variationsFromFirstDate.push(0);

    for (let i = 1; i < openPrices.length; i++) {
      const variation: number = this.numberUtility.calculatePercentageChange(initialValue, openPrices[i]);
      variationsFromFirstDate.push(Number(variation.toFixed(2)));
    }

    return variationsFromFirstDate;
  }
}
