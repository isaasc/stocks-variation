import { NgModule } from '@angular/core';
import { GoodsDetailsComponent } from './containers/goods-details/goods-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GoodsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsDetailsRoutingModule { }
