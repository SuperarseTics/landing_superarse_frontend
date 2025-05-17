import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanIgualdadComponent } from './plan-igualdad.component';

describe('PlanIgualdadComponent', () => {
  let component: PlanIgualdadComponent;
  let fixture: ComponentFixture<PlanIgualdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanIgualdadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanIgualdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
