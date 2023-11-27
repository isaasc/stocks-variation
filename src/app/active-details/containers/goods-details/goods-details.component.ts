import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GoodsDetailsService } from '../../service/goods-details.service';
import { Observable } from 'rxjs';
import { Result } from '../../models/Result.interface';
import { TimestampUtility } from 'src/app/core/utilities/timestamp.utility';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsDetailsComponent implements OnInit {
  chartResult$!: Observable<Result>;

  constructor(private goodsDetails: GoodsDetailsService, private timestampUtility: TimestampUtility) {}

  ngOnInit(): void {
    const currentTimestamp: number = Math.floor(Date.now() / 1000);
    const currentDate: Date = new Date();
    const businessDaysToSubtract: number = 32;
    const thirtyBusinessDaysAgo: Date = this.timestampUtility.calculateBusinessDaysAgo(currentDate, businessDaysToSubtract);
    const thirtyBusinessTimestampAgo: number = Math.floor(thirtyBusinessDaysAgo.getTime() / 1000);

    this.chartResult$ = this.goodsDetails.getResult('PETR4.SA', thirtyBusinessTimestampAgo , currentTimestamp, '1d');
  }
}


