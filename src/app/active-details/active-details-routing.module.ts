import { NgModule } from '@angular/core';
import { ActiveDetailsComponent } from './containers/active-details/active-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActiveDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveDetailsRoutingModule { }
