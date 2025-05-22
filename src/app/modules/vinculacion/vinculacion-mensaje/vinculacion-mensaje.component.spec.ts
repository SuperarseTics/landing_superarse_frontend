import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionMensajeComponent } from './vinculacion-mensaje.component';

describe('VinculacionMensajeComponent', () => {
  let component: VinculacionMensajeComponent;
  let fixture: ComponentFixture<VinculacionMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinculacionMensajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinculacionMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
