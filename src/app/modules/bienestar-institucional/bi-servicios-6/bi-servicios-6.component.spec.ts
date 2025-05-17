import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiServicios6Component } from './bi-servicios-6.component';

describe('BiServicios6Component', () => {
  let component: BiServicios6Component;
  let fixture: ComponentFixture<BiServicios6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiServicios6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiServicios6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
