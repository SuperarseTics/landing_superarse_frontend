import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaDraComponent } from './biblioteca-dra.component';

describe('BibliotecaDraComponent', () => {
  let component: BibliotecaDraComponent;
  let fixture: ComponentFixture<BibliotecaDraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliotecaDraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibliotecaDraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
