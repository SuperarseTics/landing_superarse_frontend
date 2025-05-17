import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../reglamento/pipes.module';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-investigacion-dominios-linea',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent, PdfViewerComponent],
  templateUrl: './investigacion-dominios-linea.component.html',
  styleUrl: './investigacion-dominios-linea.component.scss'
})
export class InvestigacionDominiosLineaComponent {

}
