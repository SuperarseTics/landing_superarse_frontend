import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-investigacion-eventos-seminario-equino',
  standalone: true,
  imports: [CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './investigacion-eventos-seminario-equino.component.html',
  styleUrl: './investigacion-eventos-seminario-equino.component.scss'
})
export class InvestigacionEventosSeminarioEquinoComponent {

}
