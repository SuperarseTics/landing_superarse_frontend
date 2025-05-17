import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { ArticlesEditorComponent } from '../articles-editor/articles-editor.component';

const routes: Routes = [
  {
    path:'',
    component:ArticlesComponent
  },
  {
    path: 'editor',
    component: ArticlesEditorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
