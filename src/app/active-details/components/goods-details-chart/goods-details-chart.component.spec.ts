import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDetailsChartComponent } from './goods-details-chart.component';

describe('GoodsDetailsChartComponent', () => {
  let component: GoodsDetailsChartComponent;
  let fixture: ComponentFixture<GoodsDetailsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsDetailsChartComponent]
    });
    fixture = TestBed.createComponent(GoodsDetailsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
