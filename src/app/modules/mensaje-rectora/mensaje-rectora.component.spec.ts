import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeRectoraComponent } from './mensaje-rectora.component';

describe('MensajeRectoraComponent', () => {
  let component: MensajeRectoraComponent;
  let fixture: ComponentFixture<MensajeRectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeRectoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensajeRectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
