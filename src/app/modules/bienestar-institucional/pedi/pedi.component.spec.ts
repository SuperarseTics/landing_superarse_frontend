import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediComponent } from './pedi.component';

describe('PediComponent', () => {
  let component: PediComponent;
  let fixture: ComponentFixture<PediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PediComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
