import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    description?: string;
    name?: string;
}
@Component({
    selector: 'app-modelo',
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
    templateUrl: './modelo.component.html',
    styleUrl: './modelo.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ModeloComponent {
    data = [
        // {
        //     id: 'pdf-content0',
        //     name: 'Dominios Académicos y líneas de Investigación',
        //     src: '/assets/modules/modelos/DOMINIOS ACADÉMICOS Y LÍNEAS DE INVESTIGACIÓN.pdf'
        // },
        {
            id: 'pdf-content1',
            name: 'Modelo Aseguramiento de Calidad y Planificación',
            src: '/assets/modules/modelos/MODELO_ASEGURAMIENTO_CALIDAD_Y_PLANIFICACION_2024.pdf'
        },
        {
            id: 'pdf-content2',
            name: 'Modulo Educativo 2024 ISTS',
            src: '/assets/modules/modelos/MODELO_EDUCATIVO_2024_ISTS.pdf'
        },
        {
            id: 'pdf-content3',
            name: 'Modelo Tecnológico Superarse 2024',
            src: '/assets/modules/modelos/MODELO_TECNOLOGICO_SUPERARSE_2024.pdf'
        },
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué vinculaciones están desplegados

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
