import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionEventosSimposioAdministracionComponent } from './investigacion-eventos-simposio-administracion.component';

describe('InvestigacionEventosSimposioAdministracionComponent', () => {
  let component: InvestigacionEventosSimposioAdministracionComponent;
  let fixture: ComponentFixture<InvestigacionEventosSimposioAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionEventosSimposioAdministracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionEventosSimposioAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
