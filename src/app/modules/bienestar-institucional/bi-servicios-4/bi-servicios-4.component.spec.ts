import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiServicios4Component } from './bi-servicios-4.component';

describe('BiServicios4Component', () => {
  let component: BiServicios4Component;
  let fixture: ComponentFixture<BiServicios4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiServicios4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiServicios4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
