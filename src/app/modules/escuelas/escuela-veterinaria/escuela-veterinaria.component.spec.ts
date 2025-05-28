import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaVeterinariaComponent } from './escuela-veterinaria.component';

describe('EscuelaVeterinariaComponent', () => {
  let component: EscuelaVeterinariaComponent;
  let fixture: ComponentFixture<EscuelaVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscuelaVeterinariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscuelaVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
