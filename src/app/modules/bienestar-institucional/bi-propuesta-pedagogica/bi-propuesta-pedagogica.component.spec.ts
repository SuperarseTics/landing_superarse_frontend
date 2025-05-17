import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiPropuestaPedagogicaComponent } from './bi-propuesta-pedagogica.component';

describe('BiPropuestaPedagogicaComponent', () => {
  let component: BiPropuestaPedagogicaComponent;
  let fixture: ComponentFixture<BiPropuestaPedagogicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiPropuestaPedagogicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiPropuestaPedagogicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
