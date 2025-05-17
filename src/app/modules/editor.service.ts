import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalSettings } from './content-manager/Models/GlobalSettings';
import { Pages } from './content-manager/Models/Page';
import { PageWidget } from './content-manager/Models/PageWidget';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private _pagesToRender:BehaviorSubject<Array<Pages>> = new BehaviorSubject<Array<Pages>>([]);
  private _globalSettings:BehaviorSubject<GlobalSettings> = new BehaviorSubject<GlobalSettings>({
    seoConfig:{
      title:'',
      description:'',
      keywords: '',
      robots: ''
    },
    mainMenuLogo:'',
    contactMenuItems: [],
    footerItems:[
      {
        name: 'Contacto',
        group:[
        ]
      },
      {
        name: 'Admisiones',
        group:[
        ]
      },
      {
        name: 'Links',
        group:[
        ]
      }
    ],
    mainMenuItems: [],
    footerLogo:'',
  });

  constructor() { }

  public updateGlobalSettings(settings:GlobalSettings):void{
    this._globalSettings.next(settings);
  }

  public get currentGlobalSettings():GlobalSettings{
    return this._globalSettings.getValue();
  }

  public get globalSettings$():Observable<GlobalSettings>{
    return this._globalSettings.asObservable();
  }

  public addWidget(index:number,widget:PageWidget){
    this._pagesToRender.getValue()[index].widgets.push(widget);
  }

  public getWidgetsOfPage(pageIndex:number){
    this._pagesToRender.getValue()[pageIndex].widgets;
  }
  public updateWidget(pageIndex:number,widgetIdx:number,widget:PageWidget){
    this._pagesToRender.getValue()[pageIndex].widgets[widgetIdx] = {...widget};
  }
  public updateAllWidgets(pageIndex:number,widgets:Array<PageWidget>){
    this._pagesToRender.getValue()[pageIndex].widgets = [...widgets];
  }
  public getCurrentPage(pageIndex:number){
    return this._pagesToRender.getValue()[pageIndex];
  }
  public addPage(page:Pages){
    this._pagesToRender.getValue().push(page);
  }

  public removePage(id:number){
    this._pagesToRender.getValue().splice(this._pagesToRender.getValue().findIndex(it=>it.id == id),1);
  }

  public updatePage(index:number,page:Pages){
    this._pagesToRender.getValue()[index] = {...page};
  }

  public get pages$():Observable<Array<Pages>>{
    return this._pagesToRender.asObservable();
  }
}
