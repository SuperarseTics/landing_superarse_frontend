import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludOcupacionalComponent } from './salud-ocupacional.component';

describe('SaludOcupacionalComponent', () => {
  let component: SaludOcupacionalComponent;
  let fixture: ComponentFixture<SaludOcupacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludOcupacionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaludOcupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
