import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image with the correct source set', () => {
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const imgElement: HTMLImageElement | null = compiled.querySelector('.header__logo');

    expect(imgElement).toBeTruthy();
    expect(imgElement!.srcset).toContain('assets/novo-logo-negativo1.svg');
  });
});
