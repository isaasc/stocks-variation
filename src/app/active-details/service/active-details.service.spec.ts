import { TestBed } from '@angular/core/testing';
import { ActiveDetailsService } from './active-details.service';

describe('ActiveDetailsApiService', () => {
  let service: ActiveDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
