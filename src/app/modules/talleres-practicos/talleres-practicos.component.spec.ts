import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresPracticosComponent } from './talleres-practicos.component';

describe('TalleresPracticosComponent', () => {
  let component: TalleresPracticosComponent;
  let fixture: ComponentFixture<TalleresPracticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalleresPracticosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalleresPracticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
