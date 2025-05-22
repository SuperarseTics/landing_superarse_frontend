import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaProyectosVinculacionComponent } from './programa-proyectos-vinculacion.component';

describe('ProgramaProyectosVinculacionComponent', () => {
  let component: ProgramaProyectosVinculacionComponent;
  let fixture: ComponentFixture<ProgramaProyectosVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaProyectosVinculacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramaProyectosVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
