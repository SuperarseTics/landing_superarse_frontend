import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaManagerComponent } from './multimedia-manager.component';

describe('MultimediaManagerComponent', () => {
  let component: MultimediaManagerComponent;
  let fixture: ComponentFixture<MultimediaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultimediaManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultimediaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
