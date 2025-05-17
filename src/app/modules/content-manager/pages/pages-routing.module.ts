import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PageEditorComponent } from '../page-editor/page-editor.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
  {
    path:'editor',
    component:PageEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
