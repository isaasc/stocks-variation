import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Result } from '../../models/Result.interface';
import { ChartService } from 'src/app/shared/chart.service';

@Component({
  selector: 'app-goods-details-chart',
  templateUrl: './goods-details-chart.component.html',
  styleUrls: ['./goods-details-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsDetailsChartComponent implements OnChanges {
  @ViewChild("canvas", {static: true}) canvas!: ElementRef;
  @Input() goods!: Result;

  constructor(private chartService: ChartService) {}

  ngOnChanges(): void {
    this.updateChart(this.goods);
  }

  updateChart(chart: Result): void {
    const chartConfig = this.chartService.createChartPriceVariationWithDailyVariationAndVariationFromFirstDate(chart);
    this.chartService.renderChart(this.canvas.nativeElement, chartConfig);
  }
}
