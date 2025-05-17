import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesEditorComponent } from './articles-editor.component';

describe('ArticlesEditorComponent', () => {
  let component: ArticlesEditorComponent;
  let fixture: ComponentFixture<ArticlesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticlesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
