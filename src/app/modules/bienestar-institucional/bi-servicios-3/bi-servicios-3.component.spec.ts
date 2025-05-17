import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiServicios3Component } from './bi-servicios-3.component';

describe('BiServicios3Component', () => {
  let component: BiServicios3Component;
  let fixture: ComponentFixture<BiServicios3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiServicios3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiServicios3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
