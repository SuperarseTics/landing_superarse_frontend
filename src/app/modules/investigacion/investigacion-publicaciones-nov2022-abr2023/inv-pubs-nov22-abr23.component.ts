import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-investigacion-publicaciones-nov2022-abr2023',
  standalone: true,
  imports: [CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './investigacion-publicaciones-nov2022-abr2023.component.html',
  styleUrl: './investigacion-publicaciones-nov2022-abr2023.component.scss'
})
export class InvestigacionPublicacionesNov2022Abr2023Component {

}
