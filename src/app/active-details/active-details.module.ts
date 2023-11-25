import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDetailsComponent } from './containers/active-details/active-details.component';
import { ActiveDetailsGraphicComponent } from './components/active-details-graphic/active-details-graphic.component';
import { HttpClientModule } from '@angular/common/http';
import { ActiveDetailsRoutingModule } from './active-details-routing.module';
import { ActiveDetailsService } from './service/active-details.service';

@NgModule({
  declarations: [
    ActiveDetailsComponent,
    ActiveDetailsGraphicComponent
  ],
  imports: [
    CommonModule,
    ActiveDetailsRoutingModule,
    HttpClientModule
  ],
  providers: [ActiveDetailsService]
})
export class ActiveDetailsModule { }
