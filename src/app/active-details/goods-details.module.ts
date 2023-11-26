import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsDetailsComponent } from './containers/goods-details/goods-details.component';
import { GoodsDetailsChartComponent } from './components/goods-details-chart/goods-details-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { GoodsDetailsRoutingModule } from './goods-details-routing.module';
import { GoodsDetailsService } from './service/goods-details.service';
import { GoodsDetailsHeaderComponent } from './components/goods-details-header/goods-details-header.component';

@NgModule({
  declarations: [
    GoodsDetailsComponent,
    GoodsDetailsChartComponent,
    GoodsDetailsHeaderComponent
  ],
  imports: [
    CommonModule,
    GoodsDetailsRoutingModule,
    HttpClientModule
  ],
  providers: [GoodsDetailsService]
})
export class GoodsDetailsModule { }
