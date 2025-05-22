import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticasPreprofesionalesComponent } from './practicas-preprofesionales.component';

describe('PracticasPreprofesionalesComponent', () => {
  let component: PracticasPreprofesionalesComponent;
  let fixture: ComponentFixture<PracticasPreprofesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticasPreprofesionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticasPreprofesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
