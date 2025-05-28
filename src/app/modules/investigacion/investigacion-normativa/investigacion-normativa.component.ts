import { Component } from '@angular/core';
import { PipesModule } from '../../reglamento/pipes.module';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-investigacion-normativa',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './investigacion-normativa.component.html',
  styleUrl: './investigacion-normativa.component.scss'
})
export class InvestigacionNormativaComponent {

}
