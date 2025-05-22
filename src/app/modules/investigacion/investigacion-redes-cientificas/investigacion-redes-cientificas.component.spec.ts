import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionRedesCientificasComponent } from './investigacion-redes-cientificas.component';

describe('InvestigacionRedesCientificasComponent', () => {
  let component: InvestigacionRedesCientificasComponent;
  let fixture: ComponentFixture<InvestigacionRedesCientificasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigacionRedesCientificasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigacionRedesCientificasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
