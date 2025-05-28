import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionPublicacionesNov2023Abr2024Component } from './investigacion-publicaciones-nov2023-abr2024.component';

describe('InvestigacionPublicacionesNov2023Abr2024Component', () => {
  let component: InvestigacionPublicacionesNov2023Abr2024Component;
  let fixture: ComponentFixture<InvestigacionPublicacionesNov2023Abr2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionPublicacionesNov2023Abr2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionPublicacionesNov2023Abr2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
