import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-presencia-comunidad',
  standalone: true,
  imports: [CommonModule, FooterComponent, WhatsappComponent, ShortcutWidgetComponent, MenuWidgetComponent, PdfViewerComponent],
  templateUrl: './presencia-comunidad.component.html',
  styleUrl: './presencia-comunidad.component.scss'
})
export class PresenciaComunidadComponent implements OnInit {

    expandedState: { [key: string]: boolean } = {}; // Controla qué vinculaciones están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los vinculaciones
        this.expandedState['dis_esp_inst'] = false;
        this.expandedState['part_vid_soc_cul'] = false;
        this.expandedState['cont-des-int-pro'] = false;
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
        // Colapsar los demás
        Object.keys(this.expandedState).forEach(key => {
            if (key !== id) {
                this.expandedState[key] = false;
            }
        });
    }

}
