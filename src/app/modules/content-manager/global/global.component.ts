import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../editor.service';
import { GlobalSettings } from '../Models/GlobalSettings';

@Component({
  selector: 'app-global',
  standalone: false,
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss'
})
export class GlobalComponent implements OnInit{
  public seoConfig:{title:string,
    description:string,
    keywords:string,
    robots:string,
  } = {
      title:'',
      description:'',
      keywords:'',
      robots:'',
  };
  public logo:string = '';
  public dropdownItems = [
    {
      label: 'Logo 1',
      value: 'https://www.superarse.edu.ec/imagenes/image.png'
    }
  ];
  public linkTypes = [
    {
      label:"Teléfono",
      type:'tel'
    },
    {
      label:"Enlace",
      type:'link'
    }
  ];

  public _formattedSettings:GlobalSettings = {
    seoConfig:this.seoConfig,
    mainMenuLogo:'',
    contactMenuItems: [],
    footerItems:[],
    mainMenuItems: [],
    footerLogo:''
  };
  selectedItems: any[] = [];
  selectedItems2: any[] = [];
  selectedMainItems: any[] = [];
  selectedGroupItems: any[] = [];
  selectedSubitems: any[] = [];
  selectedItemsFooter: any[] = [];
  constructor(private _editorService:EditorService){}

  ngOnInit(): void {
    setTimeout(() => {
      this._formattedSettings = this._editorService.currentGlobalSettings;
    }, 0);
  }
  public addNewNavItem(){
    this._formattedSettings.contactMenuItems.push({
      name: '',
      type: 'link',
      value: ''
    });
    //this._formattedSettings.contactMenuItems = JSON.parse(JSON.stringify(this._formattedSettings.contactMenuItems));
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }
  public addNewNavItem2(){
    this._formattedSettings.mainMenuItems.push({
      name: '',
      value: '',
      subItems: [
        {
          name:'',
          group:[
            {
              name:'',
              value:''
            }
          ]
        }
      ],
    });
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }

  public removeNavItem(){
    this._formattedSettings.contactMenuItems = this._formattedSettings.contactMenuItems.filter(item => !this.selectedItems.includes(item));
    this.selectedItems = []; // Vaciar la selección
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }

  public removeNavItem2(){
    this._formattedSettings.mainMenuItems = this._formattedSettings.mainMenuItems.filter(item => !this.selectedItems2.includes(item));
    this.selectedItems2 = []; // Vaciar la selección
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }

  public addNewNavGroup(item:Array<{
    name:string,
    group:Array<{
      name:string,
      value:string
    }>
  }>){
    item.push({
      name:'',
          group:[
            {
              name:'',
              value:''
            }
          ]
    });
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }
  public addNewNavSubItem2(item:Array<{
      name:string,
      value:string
  }>){
    item.push({
      name:'',
      value:''
    });
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }

  public removeGroupItem(i:number,j:number){
    this._formattedSettings.mainMenuItems[i].subItems[j].group = this._formattedSettings.mainMenuItems[i].subItems[j].group.filter(it => !this.selectedSubitems.includes(it));
    this.selectedSubitems= []; // Vaciar la selección
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }

  public addNewFooterItem(itemName:string,){
        this._formattedSettings.footerItems.filter(it => it.name == itemName)[0].group.push({
          name:itemName == 'Admisiones' ? 'No Content' : '',
          address: '',
          phone: '',
          whatsapp: '',
          email: '',
          url: '',
        });
        this._editorService.updateGlobalSettings({...this._formattedSettings});
  }

  public removeFooterNavItem(itemName:string){
    this._formattedSettings.footerItems.filter(it=>it.name == itemName)[0].group = this._formattedSettings.footerItems.filter(it=>it.name == itemName)[0].group.filter(item => !this.selectedItemsFooter.includes(item));
    this.selectedItemsFooter = []; // Vaciar la selección
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }
  public updateSettings(){
    this._formattedSettings.contactMenuItems = this._formattedSettings.contactMenuItems;
    this._editorService.updateGlobalSettings({...this._formattedSettings});
  }

}
