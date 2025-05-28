import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionReglamentoComponent } from './investigacion-reglamento.component';

describe('InvestigacionReglamentoComponent', () => {
  let component: InvestigacionReglamentoComponent;
  let fixture: ComponentFixture<InvestigacionReglamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionReglamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionReglamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
