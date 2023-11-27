import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the author name in the address element', () => {
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const addressElement: HTMLElement | null = compiled.querySelector('.footer__title');

    expect(addressElement!.textContent).toContain('Made by Isabella Campos');
  });
});
