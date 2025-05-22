import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionesInterinstitucionalesComponent } from './relaciones-interinstitucionales.component';

describe('RelacionesInterinstitucionalesComponent', () => {
  let component: RelacionesInterinstitucionalesComponent;
  let fixture: ComponentFixture<RelacionesInterinstitucionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacionesInterinstitucionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelacionesInterinstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
