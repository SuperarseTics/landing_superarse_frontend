import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionPublicacionesNov2022Abr2023Component } from './investigacion-publicaciones-nov2022-abr2023.component';

describe('InvestigacionPublicacionesNov2022Abr2023Component', () => {
  let component: InvestigacionPublicacionesNov2022Abr2023Component;
  let fixture: ComponentFixture<InvestigacionPublicacionesNov2022Abr2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionPublicacionesNov2022Abr2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionPublicacionesNov2022Abr2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
