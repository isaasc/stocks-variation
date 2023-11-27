import { Injectable } from '@angular/core';
import { NumberUtility } from './number.utility';

@Injectable({
  providedIn: 'root',
})
export class TimestampUtility {

  constructor(private numberUtility: NumberUtility) {

  }
  calculateBusinessDaysAgo(startingDate: Date, businessDaysToSubtract: number): Date {
    const startingDayOfWeek: number = startingDate.getDay();
    const saturday: number = 6;
    const sunday: number = 0;

    if (startingDayOfWeek === sunday) {
      startingDate.setDate(startingDate.getDate() - 2);
    } else if (startingDayOfWeek === saturday) {
      startingDate.setDate(startingDate.getDate() - 1);
    }

    const currentDate = new Date(startingDate.getTime());
    let businessDaysCount: number = 0;

    while (businessDaysCount < businessDaysToSubtract) {
      currentDate.setDate(currentDate.getDate() - 1);
      if (currentDate.getDay() !== saturday && currentDate.getDay() !== sunday) {
        businessDaysCount++;
      }
    }

    return currentDate;
  }

  formatTimestampsForDisplay(timestamps: string[]): string[] {
    return timestamps.map(timestamp => this.formatSingleTimestampForDisplay(Number(timestamp)));
  }

  formatSingleTimestampForDisplay(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const day = this.numberUtility.formatNumber(date.getDate(), 2);
    const month = this.numberUtility.formatNumber((date.getMonth() + 1), 2);
    return `${day}/${month}`;
  }
}
