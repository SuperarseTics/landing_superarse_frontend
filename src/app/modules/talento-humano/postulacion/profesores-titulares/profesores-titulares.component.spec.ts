import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresTitularesComponent } from './profesores-titulares.component';

describe('ProfesoresTitularesComponent', () => {
  let component: ProfesoresTitularesComponent;
  let fixture: ComponentFixture<ProfesoresTitularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesoresTitularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesoresTitularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
