import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GoodsDetailsService } from '../../service/goods-details.service';
import { Observable } from 'rxjs';
import { Result } from '../../models/Result.interface';

@Component({
  selector: 'app-goods-detailss',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsDetailsComponent implements OnInit {
  chartResult$!: Observable<Result>;
  timestamps!: string[];

  constructor(private goodsDetails: GoodsDetailsService) {}

  ngOnInit(): void {
    const timestampAtual = Math.floor(Date.now() / 1000);
    const timestamp30DiasAtras = Math.floor((Number(this.getTimestamps(new Date(), 30)))/1000);

    this.chartResult$ =this.goodsDetails.getResult('PETR4.SA', timestamp30DiasAtras, timestampAtual, '1d');
  }

  getTimestamps(diaInicial: Date, diasUteis: number) {
    const diaSemana = diaInicial.getDay();
    if (diaSemana === 0) {
      diaInicial.setDate(diaInicial.getDate() - 2);
    } else if (diaSemana === 6) {
      diaInicial.setDate(diaInicial.getDate() - 1);
    }

    const data = new Date(diaInicial.getTime());
    let diasContados = 0;

    while (diasContados < diasUteis) {
      data.setDate(data.getDate() - 1);
      if (data.getDay() !== 6 && data.getDay() !== 0) {
        diasContados++;
      }
    }
    return data;
  }

}


