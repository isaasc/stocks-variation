import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDetailsGraphicComponent } from './active-details-graphic.component';

describe('ActiveDetailsGraphicComponent', () => {
  let component: ActiveDetailsGraphicComponent;
  let fixture: ComponentFixture<ActiveDetailsGraphicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveDetailsGraphicComponent]
    });
    fixture = TestBed.createComponent(ActiveDetailsGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
