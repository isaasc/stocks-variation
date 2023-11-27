import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsDetailsComponent } from './goods-details.component';
import { HttpClientModule } from '@angular/common/http';

describe('GoodsDetailsComponent', () => {
  let component: GoodsDetailsComponent;
  let fixture: ComponentFixture<GoodsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsDetailsComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(GoodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
