import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionNoTitularesComponent } from './seleccion-no-titulares.component';

describe('SeleccionNoTitularesComponent', () => {
  let component: SeleccionNoTitularesComponent;
  let fixture: ComponentFixture<SeleccionNoTitularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionNoTitularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionNoTitularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
