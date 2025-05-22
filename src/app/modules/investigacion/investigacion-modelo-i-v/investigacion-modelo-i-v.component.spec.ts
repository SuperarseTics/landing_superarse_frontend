import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionModeloIVComponent } from './investigacion-modelo-i-v.component';

describe('InvestigacionModeloIVComponent', () => {
  let component: InvestigacionModeloIVComponent;
  let fixture: ComponentFixture<InvestigacionModeloIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionModeloIVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionModeloIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
