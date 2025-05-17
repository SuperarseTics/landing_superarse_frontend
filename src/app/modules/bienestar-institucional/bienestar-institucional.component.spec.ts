import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienestarInstitucionalComponent } from './bienestar-institucional.component';

describe('BienestarInstitucionalComponent', () => {
  let component: BienestarInstitucionalComponent;
  let fixture: ComponentFixture<BienestarInstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienestarInstitucionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BienestarInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
