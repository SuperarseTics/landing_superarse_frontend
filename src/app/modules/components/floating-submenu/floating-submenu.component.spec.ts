import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSubmenuComponent } from './floating-submenu.component';

describe('FloatingSubmenuComponent', () => {
  let component: FloatingSubmenuComponent;
  let fixture: ComponentFixture<FloatingSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingSubmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
