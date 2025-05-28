import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import * as moment from 'moment';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-multimedia-manager',
  standalone: true,
  imports:[TableModule,ButtonModule,RouterOutlet, RouterModule],
  templateUrl: './multimedia-manager.component.html',
  styleUrl: './multimedia-manager.component.scss'
})
export class MultimediaManagerComponent {
  public selectedRow:any[] = [];
  public lastId:number = 0;
  public articles = [
    {
      id:1,
      name:'Girl Chinese',
      date: moment().format('LL'),
      url: 'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
    },
    {
      id:2,
      name:'Economy jpg',
      date: moment().format('LL'),
      url: 'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
    },
    {
      id:3,
      name:'Mision y Vision png',
      date: moment().format('LL'),
      url: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg',
    }
  ];
  constructor(){
    this.lastId = this.articles.length;
  }
  public removePage(id:number){
     this.articles.splice(this.articles.findIndex(it=>it.id == id),1);
  }

  public addPage(){
    this.lastId++;
    this.articles.push({
      id: this.lastId,
      name:'Pagina nueva',
      date: moment().format('LL'),
      url: '',
    });
  }
}
