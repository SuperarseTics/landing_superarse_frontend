import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  description?:string;
  name?:string;
}
@Component({
  selector: 'app-valores',
  standalone: true,
  imports: [TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent],
  templateUrl: './valores.component.html',
  styleUrl: './valores.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ValoresComponent {
  events: EventItem[];

  constructor() {
      this.events = [
          { name: 'Fundación',status: 'Ordered', date: '2022', icon: 'pi pi-shopping-cart', color: '#9C27B0' , description: 'Aqui yace la historia de Superarse'},
          { name: 'Certificación',status: 'Processing', date: '2023', icon: 'pi pi-cog', color: '#673AB7' , description: 'Aqui yace la historia de Superarse'},
          { name: 'Aprobación',status: 'Shipped', date: '20235', icon: 'pi pi-shopping-cart', color: '#FF9800', description: 'Aqui yace la historia de Superarse' },
          { name: 'Mejoras',status: 'Delivered', date: '2024', icon: 'pi pi-check', color: '#607D8B', description: 'Aqui yace la historia de Superarse' }
      ];
  }
}
