import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemuneracionMensualComponent } from './remuneracion-mensual.component';

describe('RemuneracionMensualComponent', () => {
  let component: RemuneracionMensualComponent;
  let fixture: ComponentFixture<RemuneracionMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemuneracionMensualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemuneracionMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
