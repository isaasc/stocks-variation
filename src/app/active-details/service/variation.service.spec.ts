import { TestBed } from '@angular/core/testing';
import { VariationService } from './variation.service';
import { NumberUtility } from 'src/app/core/utilities/number.utility';
import { Indicator } from '../models/Indicator.interface';
import { indicatorMock } from '../models/mocks/ChartResult.mocks';

describe('VariationService', () => {
  let service: VariationService;
  let numberUtility: jasmine.SpyObj<NumberUtility>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NumberUtility', ['calculatePercentageChange']);

    TestBed.configureTestingModule({
      providers: [
        VariationService,
        { provide: NumberUtility, useValue: spy }
      ]
    });

    service = TestBed.inject(VariationService);
    numberUtility = TestBed.inject(NumberUtility) as jasmine.SpyObj<NumberUtility>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateDailyVariation', () => {
    it('should calculate daily variation correctly', () => {
      const indicators: Indicator = indicatorMock;

      numberUtility.calculatePercentageChange.and.returnValues(10, 9);

      const result: number[] = service.calculateDailyVariation(indicators);

      expect(result).toEqual([0, 10, 9]);
      expect(numberUtility.calculatePercentageChange).toHaveBeenCalledTimes(2);
    });

  });

  describe('calculateVariationFromFirstDate', () => {
    it('should calculate variation from first date correctly', () => {
      const indicators: Indicator = indicatorMock;

      numberUtility.calculatePercentageChange.and.returnValues(0, 10, 20);

      const result: number[] = service.calculateVariationFromFirstDate(indicators);

      expect(result).toEqual([0, 0, 10]);
      expect(numberUtility.calculatePercentageChange).toHaveBeenCalledTimes(2);
    });
  });
});
