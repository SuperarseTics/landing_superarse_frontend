import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiServicios5Component } from './bi-servicios-5.component';

describe('BiServicios5Component', () => {
  let component: BiServicios5Component;
  let fixture: ComponentFixture<BiServicios5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiServicios5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiServicios5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
