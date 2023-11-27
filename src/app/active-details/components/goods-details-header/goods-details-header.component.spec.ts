import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsDetailsHeaderComponent } from './goods-details-header.component';
import { Meta } from '../../models/Meta.interface';
import { metaMock } from '../../models/mocks/ChartResult.mocks';

describe('GoodsDetailsHeaderComponent', () => {
  let component: GoodsDetailsHeaderComponent;
  let fixture: ComponentFixture<GoodsDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoodsDetailsHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsDetailsHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title and title--principal', () => {
    const meta: Meta = metaMock;
    component.goods = meta;

    fixture.detectChanges();

    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.title');
    const titlePrincipalElement: HTMLElement = fixture.nativeElement.querySelector('.title--principal');

    expect(titleElement.textContent).toContain('Detalhes do Ativo');
    expect(titlePrincipalElement.textContent).toContain('AAPL');
  });
});
