import { TestBed } from '@angular/core/testing';

import { ChartService } from './chart.service';
import { TimestampUtility } from '../core/utilities/timestamp.utility';
import { NumberUtility } from '../core/utilities/number.utility';
import { VariationService } from '../active-details/service/variation.service';

describe('ChartService', () => {
  let service: ChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChartService,
        TimestampUtility,
        NumberUtility,
        VariationService,
      ],
    });

    service = TestBed.inject(ChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
