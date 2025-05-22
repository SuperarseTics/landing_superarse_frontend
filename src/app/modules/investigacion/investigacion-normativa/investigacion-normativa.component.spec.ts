import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionNormativaComponent } from './investigacion-normativa.component';

describe('InvestigacionNormativaComponent', () => {
  let component: InvestigacionNormativaComponent;
  let fixture: ComponentFixture<InvestigacionNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionNormativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
