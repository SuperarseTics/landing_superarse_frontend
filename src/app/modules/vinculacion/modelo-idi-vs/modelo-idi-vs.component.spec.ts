import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloIdiVsComponent } from './modelo-idi-vs.component';

describe('ModeloIdiVsComponent', () => {
  let component: ModeloIdiVsComponent;
  let fixture: ComponentFixture<ModeloIdiVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloIdiVsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeloIdiVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
