import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-aseguramiento-de-la-calidad',
  standalone: true,
  imports: [
      TimelineModule,
      CommonModule,
      FooterComponent,
      ShortcutWidgetComponent,
      MenuWidgetComponent,
      WhatsappComponent,
      PdfViewerComponent
  ],
  templateUrl: './aseguramiento-de-la-calidad.component.html',
  styleUrl: './aseguramiento-de-la-calidad.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AseguramientoDeLaCalidadComponent {
}
