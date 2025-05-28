import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentType } from '../component.type';

@Component({
  selector: 'vicarti-multimedia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.scss'
})
export class MultimediaComponent {
  @Input() componentRef:any;
  @Output() removeComponent = new EventEmitter<any>();
  @Output() componentName:EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
  public isActive:boolean = false;
  constructor(){}
  action(){
    this.isActive = !this.isActive;
    if(this.isActive){
      this.componentName.emit('multimedia');
    }else{
      this.componentName.emit('none');
    }
  }
  destroyComponent(){
    this.removeComponent.emit(this.componentRef);
  }
}
