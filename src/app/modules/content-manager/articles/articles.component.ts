import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import * as moment from 'moment';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports:[TableModule,ButtonModule,RouterOutlet, RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  public selectedRow:any[] = [];
  public lastId:number = 0;
  public articles = [
    {
      id:1,
      name:'Inicio',
      date: moment().format('LL')
    },
    {
      id:2,
      name:'Quienes Somos',
      date: moment().format('LL')
    },
    {
      id:3,
      name:'Mision y Vision',
      date: moment().format('LL')
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
      date: moment().format('LL')
    });
  }
}
