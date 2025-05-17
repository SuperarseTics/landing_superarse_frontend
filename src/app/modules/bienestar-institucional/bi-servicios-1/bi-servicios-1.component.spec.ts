import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiServicios1Component } from './bi-servicios-1.component';

describe('BiServicios1Component', () => {
  let component: BiServicios1Component;
  let fixture: ComponentFixture<BiServicios1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiServicios1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiServicios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
