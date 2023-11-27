import { Component, Input } from '@angular/core';
import { Meta } from '../../models/Meta.interface';

@Component({
  selector: 'app-goods-details-header',
  templateUrl: './goods-details-header.component.html',
  styleUrls: ['./goods-details-header.component.scss']
})
export class GoodsDetailsHeaderComponent {

  @Input() goods!: Meta;

}
