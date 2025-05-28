import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaSaludComponent } from './escuela-salud.component';

describe('EscuelaSaludComponent', () => {
  let component: EscuelaSaludComponent;
  let fixture: ComponentFixture<EscuelaSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscuelaSaludComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscuelaSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
