import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDetailsComponent } from './active-details.component';

describe('ActiveDetailsComponent', () => {
  let component: ActiveDetailsComponent;
  let fixture: ComponentFixture<ActiveDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveDetailsComponent]
    });
    fixture = TestBed.createComponent(ActiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
