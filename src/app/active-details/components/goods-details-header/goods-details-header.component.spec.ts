import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDetailsHeaderComponent } from './goods-details-header.component';

describe('GoodsDetailsHeaderComponent', () => {
  let component: GoodsDetailsHeaderComponent;
  let fixture: ComponentFixture<GoodsDetailsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsDetailsHeaderComponent]
    });
    fixture = TestBed.createComponent(GoodsDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
