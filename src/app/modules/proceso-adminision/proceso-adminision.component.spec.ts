import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoAdminisionComponent } from './proceso-adminision.component';

describe('ProcesoAdminisionComponent', () => {
  let component: ProcesoAdminisionComponent;
  let fixture: ComponentFixture<ProcesoAdminisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoAdminisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcesoAdminisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
