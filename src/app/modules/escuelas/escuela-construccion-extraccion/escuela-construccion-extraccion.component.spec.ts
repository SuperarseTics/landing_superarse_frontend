import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaConstruccionExtraccionComponent } from './escuela-construccion-extraccion.component';

describe('EscuelaConstruccionExtraccionComponent', () => {
  let component: EscuelaConstruccionExtraccionComponent;
  let fixture: ComponentFixture<EscuelaConstruccionExtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscuelaConstruccionExtraccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscuelaConstruccionExtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
