import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionDominiosLineaComponent } from './investigacion-dominios-linea.component';

describe('InvestigacionDominiosLineaComponent', () => {
  let component: InvestigacionDominiosLineaComponent;
  let fixture: ComponentFixture<InvestigacionDominiosLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionDominiosLineaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionDominiosLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
