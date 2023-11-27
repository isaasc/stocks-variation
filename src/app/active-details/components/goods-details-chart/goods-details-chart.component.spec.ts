import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsDetailsChartComponent } from './goods-details-chart.component';
import { ChartService } from 'src/app/shared/chart.service';
import { Result } from '../../models/Result.interface';
import { resultMock } from '../../models/mocks/ChartResult.mocks';
import { chartConfigPriceVariationWithDailyVariationAndVariationFromFirstDateMock } from 'src/app/shared/mock/ChartConfigPriceVariationWithDailyVariationAndVariationFromFirstDate.mock';
import { ChartConfiguration, ChartTypeRegistry } from 'chart.js';

describe('GoodsDetailsChartComponent', () => {
  let component: GoodsDetailsChartComponent;
  let fixture: ComponentFixture<GoodsDetailsChartComponent>;
  let chartService: ChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsDetailsChartComponent],
      providers: [ChartService],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsDetailsChartComponent);
    component = fixture.componentInstance;
    chartService = TestBed.inject(ChartService);

    spyOn(chartService, 'createChartPriceVariationWithDailyVariationAndVariationFromFirstDate')
    .and.returnValue(chartConfigPriceVariationWithDailyVariationAndVariationFromFirstDateMock);
    spyOn(chartService, 'renderChart');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update chart when updateChart is called', () => {
    const goods: Result = resultMock;
    const chartConfig: ChartConfiguration<keyof ChartTypeRegistry> = chartConfigPriceVariationWithDailyVariationAndVariationFromFirstDateMock;

    component.updateChart(goods);

    expect(chartService.createChartPriceVariationWithDailyVariationAndVariationFromFirstDate).toHaveBeenCalledWith(goods);
    expect(chartService.renderChart).toHaveBeenCalledOnceWith(component.canvas.nativeElement, chartConfig);
  });
});
