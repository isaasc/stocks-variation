import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'active-details', pathMatch: 'full' },
  { path: 'active-details', loadChildren: () => import('./active-details/goods-details.module').then(m => m.GoodsDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
