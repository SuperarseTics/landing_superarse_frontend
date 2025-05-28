import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionPublicacionesMayOct2024Component } from './investigacion-publicaciones-may-oct-2024.component';

describe('InvestigacionPublicacionesMayOct2024Component', () => {
  let component: InvestigacionPublicacionesMayOct2024Component;
  let fixture: ComponentFixture<InvestigacionPublicacionesMayOct2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionPublicacionesMayOct2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionPublicacionesMayOct2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
