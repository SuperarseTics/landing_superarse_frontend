import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionQuienesSomosComponent } from './investigacion-quienes-somos.component';

describe('InvestigacionQuienesSomosComponent', () => {
  let component: InvestigacionQuienesSomosComponent;
  let fixture: ComponentFixture<InvestigacionQuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionQuienesSomosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
