import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { EditorService } from '../../editor.service';
@Component({
  selector: 'app-page-editor',
  standalone: true,
  imports: [RouterModule,CommonModule,ButtonModule,RouterOutlet,InputTextModule,DataViewModule,OrderListModule,FormsModule,DropdownModule,SelectButtonModule,],
  templateUrl: './page-editor.component.html',
  styleUrl: './page-editor.component.scss'
})
export class PageEditorComponent {
  public bgImage:string = '';
  public hslideImages:Array<{
    url:string,
    label:string,
  }> = [
    {
    url: 'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
    label: 'Woman Student',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg',
    label: 'Student 2',
  },
  {
    url: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label : 'Image 3'
  }
]
;
  public isVisibleWidgetSelector:boolean = false;
  selectedItems: any[] = [];
  public currentPageInEdition:string = 'Inicio';
  public availableWidgets:Array<{
    name:string,
    type:string,
    icon:string,
  }> =[
    {
      name:'Slider de contenido',
      type:'content-slider',
      icon:'',
    },
    {
      name: 'Segmento Multimedia',
      type:'multimedia',
      icon:'',
    },
    {
      name: 'Slider de noticias',
      type:'news',
      icon:'',
    },
    {
      name: 'Slider de imagenes Principal',
      type:'hero-slider',
      icon:'',
    }
  ];
  public pageWidgets:Array<{
    name:string,
    type:string,
    properties:any
  }> = [];
  constructor(private _editorService:EditorService){}
  public toggleWidgetMenu(){
    this.isVisibleWidgetSelector = !this.isVisibleWidgetSelector;
  }

  public addWidget(item){
    if(item.type == 'hero-slider'){
      this.pageWidgets.push({
        name: item.name,
        type: item.type,
        properties: {
          slides: [],
        }
      });
    }
    
    // const newWidget = { name: type };
    // this.pageWidgets = [...this.pageWidgets, newWidget];
  }

  public removeNWidgetItem(){
    this.pageWidgets = this.pageWidgets.filter(item => !this.selectedItems.includes(item));
    this.selectedItems = [];
  }

  public insertSlide(item){
    item.properties.slides.push({
      url:'',
      cardTitle:'',
      cardBigText:'',
      cardHashtag:'',
      buttonText:'',
      urlButton:'',
    });
  }
}
