import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-protocolo',
  standalone: true,
  imports: [
    TimelineModule,
    CommonModule,
    FooterComponent,
    ShortcutWidgetComponent,
    MenuWidgetComponent,
    WhatsappComponent
  ],
  templateUrl: './protocolo.component.html',
  styleUrl: './protocolo.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProtocoloComponent implements OnInit {
  ngOnInit() {
    const iframe = document.createElement('iframe');
    iframe.src = '../../../assets/modules/normativa/NORMATIVA DE SELECCIÓN DEL PERSONAL.pdf';
    iframe.style.width = '100%';
    iframe.style.height = '80vh';
    iframe.style.border = 'none';

    // Obtener el contenedor donde agregar el iframe
    const container = document.getElementById('pdf-container');
    if (container) {
      container.appendChild(iframe);
    }
  }
}
