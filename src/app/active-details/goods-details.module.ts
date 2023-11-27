import { NgModule } from '@angular/core';
import { GoodsDetailsComponent } from './containers/goods-details/goods-details.component';
import { GoodsDetailsChartComponent } from './components/goods-details-chart/goods-details-chart.component';
import { GoodsDetailsRoutingModule } from './goods-details-routing.module';
import { GoodsDetailsService } from './service/goods-details.service';
import { GoodsDetailsHeaderComponent } from './components/goods-details-header/goods-details-header.component';
import { VariationService } from './service/variation.service';
import { SharedModule } from '../shared/shared.module';
import { ChartService } from '../shared/chart.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GoodsDetailsComponent,
    GoodsDetailsChartComponent,
    GoodsDetailsHeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoodsDetailsRoutingModule
  ],
  providers: [GoodsDetailsService, VariationService]
})
export class GoodsDetailsModule { }
