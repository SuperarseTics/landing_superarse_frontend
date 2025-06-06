import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaEmpleoComponent } from './bolsa-empleo.component';

describe('BolsaEmpleoComponent', () => {
  let component: BolsaEmpleoComponent;
  let fixture: ComponentFixture<BolsaEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsaEmpleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolsaEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
