import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenciaComunidadComponent } from './presencia-comunidad.component';

describe('PresenciaComunidadComponent', () => {
  let component: PresenciaComunidadComponent;
  let fixture: ComponentFixture<PresenciaComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenciaComunidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresenciaComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
