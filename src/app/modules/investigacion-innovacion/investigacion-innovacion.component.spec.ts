import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionInnovacionComponent } from './investigacion-innovacion.component';

describe('InvestigacionInnovacionComponent', () => {
  let component: InvestigacionInnovacionComponent;
  let fixture: ComponentFixture<InvestigacionInnovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionInnovacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionInnovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
