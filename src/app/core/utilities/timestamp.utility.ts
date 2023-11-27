import { Injectable } from '@angular/core';
import { format, subDays, getDay } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class TimestampUtility {

  constructor() {}

  calculateBusinessDaysAgo(startingDate: Date, businessDaysToSubtract: number): Date {
    const saturday: number = 6;
    const sunday: number = 0;

    if (getDay(startingDate) === sunday) {
      startingDate = subDays(startingDate, 2);
    } else if (getDay(startingDate) === saturday) {
      startingDate = subDays(startingDate, 1);
    }

    let currentDate = new Date(startingDate.getTime());
    let businessDaysCount: number = 0;

    while (businessDaysCount < businessDaysToSubtract) {
      currentDate = subDays(currentDate, 1);
      if (getDay(currentDate) !== saturday && getDay(currentDate) !== sunday) {
        businessDaysCount++;
      }
    }
    return currentDate;
  }

  formatTimestampsForDisplay(timestamps: string[]): string[] | undefined {
    if(!timestamps) return;

    return timestamps.map(timestamp => this.formatSingleTimestampForDisplay(timestamp));
  }

  formatSingleTimestampForDisplay(timestamp: string): string {
    if(!timestamp) return '';

    const date = new Date(Number(timestamp) * 1000);
    return format(date, 'dd/MM');
  }
}
