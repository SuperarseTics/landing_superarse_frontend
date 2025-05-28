import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaVirtualELibroComponent } from './biblioteca-virtual-e-libro.component';

describe('BibliotecaVirtualELibroComponent', () => {
  let component: BibliotecaVirtualELibroComponent;
  let fixture: ComponentFixture<BibliotecaVirtualELibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliotecaVirtualELibroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibliotecaVirtualELibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
