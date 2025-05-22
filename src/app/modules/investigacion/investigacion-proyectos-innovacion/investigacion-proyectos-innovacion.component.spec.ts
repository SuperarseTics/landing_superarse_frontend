import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionProyectosInnovacionComponent } from './investigacion-proyectos-innovacion.component';

describe('InvestigacionProyectosInnovacionComponent', () => {
  let component: InvestigacionProyectosInnovacionComponent;
  let fixture: ComponentFixture<InvestigacionProyectosInnovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionProyectosInnovacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionProyectosInnovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
