import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionEventosSeminarioEquinoComponent } from './investigacion-eventos-seminario-equino.component';

describe('InvestigacionEventosSeminarioEquinoComponent', () => {
  let component: InvestigacionEventosSeminarioEquinoComponent;
  let fixture: ComponentFixture<InvestigacionEventosSeminarioEquinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionEventosSeminarioEquinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionEventosSeminarioEquinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
