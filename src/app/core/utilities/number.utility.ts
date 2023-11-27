import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberUtility {

  calculatePercentageChange(initialValue: number, finalValue: number, decimalPlaces: number): number {
    return this.formatNumber(((finalValue - initialValue) / initialValue) * 100, decimalPlaces);
  }

  formatNumber(value: number, decimalPlaces: number): number {
    return Number(value.toFixed(decimalPlaces));
  }
}
