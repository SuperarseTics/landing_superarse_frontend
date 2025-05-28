import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiDenunciaComponent } from './bi-denuncia.component';

describe('BiDenunciaComponent', () => {
  let component: BiDenunciaComponent;
  let fixture: ComponentFixture<BiDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiDenunciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
