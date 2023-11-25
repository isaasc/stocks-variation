import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDetailsComponent } from './containers/active-details/active-details.component';
import { ActiveDetailsGraphicComponent } from './components/active-details-graphic/active-details-graphic.component';

@NgModule({
  declarations: [
    ActiveDetailsComponent,
    ActiveDetailsGraphicComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ActiveDetailsComponent
  ]
})
export class ActiveDetailsModule { }
