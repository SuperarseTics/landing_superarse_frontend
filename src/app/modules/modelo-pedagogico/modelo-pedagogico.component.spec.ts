import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPedagogicoComponent } from './modelo-pedagogico.component';

describe('ModeloPedagogicoComponent', () => {
  let component: ModeloPedagogicoComponent;
  let fixture: ComponentFixture<ModeloPedagogicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloPedagogicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeloPedagogicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
