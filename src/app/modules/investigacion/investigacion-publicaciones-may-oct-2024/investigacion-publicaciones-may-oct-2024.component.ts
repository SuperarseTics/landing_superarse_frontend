import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-investigacion-publicaciones-may-oct-2024',
  standalone: true,
  imports: [CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './investigacion-publicaciones-may-oct-2024.component.html',
  styleUrl: './investigacion-publicaciones-may-oct-2024.component.scss'
})
export class InvestigacionPublicacionesMayOct2024Component {

}
