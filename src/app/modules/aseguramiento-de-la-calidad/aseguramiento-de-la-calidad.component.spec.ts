import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguramientoDeLaCalidadComponent } from './aseguramiento-de-la-calidad.component';

describe('AseguramientoDeLaCalidadComponent', () => {
  let component: AseguramientoDeLaCalidadComponent;
  let fixture: ComponentFixture<AseguramientoDeLaCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AseguramientoDeLaCalidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AseguramientoDeLaCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
