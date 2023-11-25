import { Component, OnInit } from '@angular/core';
import { GoodsDetailsService } from '../../service/goods-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goods-detailss',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsDetailsComponent implements OnInit {
  test$!: Observable<any>;

  constructor(private activeDetails: GoodsDetailsService) {}

  ngOnInit(): void {
   this.test$ = this.activeDetails.getChart('PETR4.SA');
  }

}
