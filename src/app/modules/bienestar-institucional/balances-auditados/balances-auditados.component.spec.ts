import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesAuditadosComponent } from './balances-auditados.component';

describe('BalancesAuditadosComponent', () => {
  let component: BalancesAuditadosComponent;
  let fixture: ComponentFixture<BalancesAuditadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalancesAuditadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalancesAuditadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
