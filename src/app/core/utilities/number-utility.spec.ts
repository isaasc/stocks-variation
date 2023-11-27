import { TestBed } from '@angular/core/testing';
import { NumberUtility } from './number.utility';


describe('NumberUtility', () => {
  let numberUtility: NumberUtility;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberUtility]
    });

    numberUtility = TestBed.inject(NumberUtility);
  });

  it('should be created', () => {
    expect(numberUtility).toBeTruthy();
  });

  it('should calculate percentage change correctly', () => {
    const initialValue: number = 10;
    const finalValue: number = 15;
    const decimalPlaces: number = 2;
    const percentageChange: number = numberUtility.calculatePercentageChange(initialValue, finalValue, decimalPlaces);
    expect(percentageChange).toBe(50);
  });

  it('should calculate percentage change correctly for negative values', () => {
    const initialValue: number = 15;
    const finalValue: number = 10;
    const decimalPlaces: number = 2;
    const percentageChange: number = numberUtility.calculatePercentageChange(initialValue, finalValue, decimalPlaces);
    expect(percentageChange).toBe(-33.33);
  });

  it('should format number with two decimal places correctly', () => {
    const value: number = 5.6789;
    const formattedValue: number = numberUtility.formatNumber(value, 2);
    expect(formattedValue).toBe(5.68);
  });

  it('should format number with no decimal places correctly', () => {
    const value: number = 5;
    const formattedValue: number = numberUtility.formatNumber(value, 1);
    expect(formattedValue).toBe(5.00);
  });
});
