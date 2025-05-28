import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiServicios2Component } from './bi-servicios-2.component';

describe('BiServicios2Component', () => {
  let component: BiServicios2Component;
  let fixture: ComponentFixture<BiServicios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiServicios2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiServicios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
