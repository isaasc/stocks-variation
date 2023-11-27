import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberUtility {

  calculatePercentageChange(initialValue: number, finalValue: number): number {
    return ((finalValue - initialValue) / initialValue) * 100;
  }

  formatNumber(value: number, decimalPlaces: number): number {
    return Number(value.toFixed(decimalPlaces));
  }
}
