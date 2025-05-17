import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentType } from '../component.type';

@Component({
  selector: 'vicarti-links-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-widget.component.html',
  styleUrl: './links-widget.component.scss'
})
export class LinksWidgetComponent {
  @Input() componentRef:any;
  @Output() removeComponent = new EventEmitter<any>();
  @Output() componentName:EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
  public isActive:boolean = false;
  public menuItems:Array<{label:string,url:string}> = [
    {
      label:'Informacion Financiera',
      url:'informacion-financiera'
    },
    {
      label:'Admisiones',
      url:'admisiones'
    },
    {
      label:'Correo',
      url:'https://portal.office.com'
    },
    {
      label:'Aula Virtual',
      url: 'aula-virtual'
    }
  ];
  action(){
    this.isActive = !this.isActive;
    if(this.isActive){
      this.componentName.emit('links');
    }else{
      this.componentName.emit('none');
    }
  }
  destroyComponent(){
    this.removeComponent.emit(this.componentRef);
  }
}
