import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TableModule } from 'primeng/table';
import { RouterModule, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TableModule,
    RouterOutlet, RouterModule
  ]
})
export class PagesModule { }
