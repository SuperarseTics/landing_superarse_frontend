import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresEvaluadosComponent } from './mejores-evaluados.component';

describe('MejoresEvaluadosComponent', () => {
  let component: MejoresEvaluadosComponent;
  let fixture: ComponentFixture<MejoresEvaluadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MejoresEvaluadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MejoresEvaluadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
