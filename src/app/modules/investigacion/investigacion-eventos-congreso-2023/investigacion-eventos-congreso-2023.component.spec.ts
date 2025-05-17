import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionEventosCongreso2023Component } from './investigacion-eventos-congreso-2023.component';

describe('InvestigacionEventosCongreso2023Component', () => {
  let component: InvestigacionEventosCongreso2023Component;
  let fixture: ComponentFixture<InvestigacionEventosCongreso2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionEventosCongreso2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionEventosCongreso2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
