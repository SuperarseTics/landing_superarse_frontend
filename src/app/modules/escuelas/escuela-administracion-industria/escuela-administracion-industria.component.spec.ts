import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaAdministracionIndustriaComponent } from './escuela-administracion-industria.component';

describe('EscuelaAdministracionIndustriaComponent', () => {
  let component: EscuelaAdministracionIndustriaComponent;
  let fixture: ComponentFixture<EscuelaAdministracionIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscuelaAdministracionIndustriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscuelaAdministracionIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
