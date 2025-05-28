import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaEducacionHumanidadesComponent } from './escuela-educacion-humanidades.component';

describe('EscuelaEducacionHumanidadesComponent', () => {
  let component: EscuelaEducacionHumanidadesComponent;
  let fixture: ComponentFixture<EscuelaEducacionHumanidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscuelaEducacionHumanidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscuelaEducacionHumanidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
