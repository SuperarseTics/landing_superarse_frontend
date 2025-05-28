import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global.component';
import { GlobalRoutingModule } from './global-routing.module';
import { OrderListModule } from 'primeng/orderlist';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [GlobalComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlobalRoutingModule,
    OrderListModule,
    InputTextModule,
    SelectButtonModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
  ]
})
export class GlobalModule { }
