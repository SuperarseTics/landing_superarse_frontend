import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { EditorService } from '../../editor.service';
import { Observable } from 'rxjs';
import { Pages } from '../Models/Page';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pages',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports:[TableModule,ButtonModule,RouterOutlet, RouterModule,CommonModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit{
  public selectedRow:any[] = [];
  public lastId:number = 0;
  public pages$:Observable<Array<Pages>> = new Observable();
  constructor(private _editorService:EditorService){
  }
  ngOnInit(): void {
   this.pages$ = this._editorService.pages$; 
   this.pages$.subscribe({
    next:(pages)=>{
      this.lastId = pages.length;
    }
   });
  }
  public removePage(id:number){
     this._editorService.removePage(id);
  }

  public addPage(){
    this.lastId++;
    this._editorService.addPage({
      id: this.lastId,
      name:'Pagina nueva',
      widgets:[],
    });
  }
}
