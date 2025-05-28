import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionPublicacionesMayOct2023Component } from './investigacion-publicaciones-may-oct-2023.component';

describe('InvestigacionPublicacionesMayOct2023Component', () => {
  let component: InvestigacionPublicacionesMayOct2023Component;
  let fixture: ComponentFixture<InvestigacionPublicacionesMayOct2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionPublicacionesMayOct2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionPublicacionesMayOct2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
