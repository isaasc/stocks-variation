import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TimestampUtility } from './utilities/timestamp.utility';
import { NumberUtility } from './utilities/number.utility';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TimestampUtility,
    NumberUtility
  ]
})
export class CoreModule { }
