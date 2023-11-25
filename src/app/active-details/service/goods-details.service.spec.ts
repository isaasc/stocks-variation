import { TestBed } from '@angular/core/testing';
import { GoodsDetailsService } from './goods-details.service';

describe('GoodsDetailsService', () => {
  let service: GoodsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
