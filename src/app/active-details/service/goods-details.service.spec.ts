import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GoodsDetailsService } from './goods-details.service';

describe('GoodsDetailsService', () => {
  let service: GoodsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsDetailsService],
      imports: [HttpClientModule]
    });

    service = TestBed.inject(GoodsDetailsService);
  });

  it('should be create', () => {
    expect(service).toBeTruthy();
  });
});
