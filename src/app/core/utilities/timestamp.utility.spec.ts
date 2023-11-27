import { TestBed } from '@angular/core/testing';
import { NumberUtility } from './number.utility';
import { TimestampUtility } from './timestamp.utility';

describe('TimestampUtility', () => {
  let timestampUtility: TimestampUtility;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimestampUtility, NumberUtility]
    });

    timestampUtility = TestBed.inject(TimestampUtility);
  });

  it('should be created', () => {
    expect(timestampUtility).toBeTruthy();
  });

  it('should calculate business days ago correctly', () => {
    const startingDate = new Date('2023-12-01');
    const businessDaysToSubtract = 2;
    const result = timestampUtility.calculateBusinessDaysAgo(startingDate, businessDaysToSubtract);
    expect(result).toEqual(new Date('2023-11-29'));
  });

  it('should format timestamps for display correctly', () => {
    const timestamps: string[] = ['1637923200', '1638009600', '1638096000'];
    const   result: string[] = timestampUtility.formatTimestampsForDisplay(timestamps) as string[];
    expect(result).toEqual(['26/11', '27/11', '28/11']);
  });

  it('should format single timestamp for display correctly', () => {
    const timestamp: string = '1637923200';
    const result = timestampUtility.formatSingleTimestampForDisplay(timestamp);
    expect(result).toBe('26/11');
  });

  it('should handle null values when formatting timestamps', () => {
    const result = timestampUtility.formatTimestampsForDisplay(null as any);
    expect(result).toEqual(undefined);
  });

  it('should handle undefined values when formatting single timestamp', () => {
    const result = timestampUtility.formatSingleTimestampForDisplay(undefined as any);
    expect(result).toBe('');
  });
});
