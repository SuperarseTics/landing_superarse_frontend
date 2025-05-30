import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionVisionComponent } from './misionvision.component';

describe('MisionVisionComponent', () => {
  let component: MisionVisionComponent;
  let fixture: ComponentFixture<MisionVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisionVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
