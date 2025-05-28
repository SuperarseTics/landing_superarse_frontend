import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-relaciones-interinstitucionales',
  standalone: true,
  imports: [CommonModule, FooterComponent, WhatsappComponent, ShortcutWidgetComponent, MenuWidgetComponent, PdfViewerComponent],
  templateUrl: './relaciones-interinstitucionales.component.html',
  styleUrl: './relaciones-interinstitucionales.component.scss'
})
export class RelacionesInterinstitucionalesComponent implements OnInit {
    data = [
        {
            id: 'pdf-container1',
            name: "Reglamento de Relaciones Interinstitucionales",
            type: 'pdf',
            value: '/assets/modules/vinculación/relaciones-interinstitucionales/3017_663_COD_3175_100225172837.pdf'
        },
        {
            id: 'list-container2',
            name: 'Formatos',
            type: 'list-urls',
            files: []
        },
        {
            id: 'list-container3',
            name: 'Instituciones con Convenio',
            type: 'list-urls',
            files: []
        }
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué vinculaciones están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los vinculaciones
        this.data.forEach(vinculacion => {
            // this.expandedState[vinculación.id] = false;
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }
}
