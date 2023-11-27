import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, FooterComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header component', () => {
    const headerElement: HTMLElement = fixture.nativeElement.querySelector('app-header');
    expect(headerElement).toBeDefined();
  });

  it('should render footer component', () => {
    const footerElement: HTMLElement = fixture.nativeElement.querySelector('app-footer');
    expect(footerElement).toBeDefined();
  });

  it('should render router outlet for main content', () => {
    const routerOutletElement: HTMLElement = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutletElement).toBeDefined();
  });
});
