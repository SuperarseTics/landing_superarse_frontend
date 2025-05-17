import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumplientoTributarioComponent } from './cumpliento-tributario.component';

describe('CumplientoTributarioComponent', () => {
  let component: CumplientoTributarioComponent;
  let fixture: ComponentFixture<CumplientoTributarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CumplientoTributarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CumplientoTributarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
