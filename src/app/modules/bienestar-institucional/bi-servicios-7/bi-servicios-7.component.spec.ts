import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiServicios7Component } from './bi-servicios-7.component';

describe('BiServicios7Component', () => {
  let component: BiServicios7Component;
  let fixture: ComponentFixture<BiServicios7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiServicios7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiServicios7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
