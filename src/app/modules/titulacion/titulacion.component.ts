import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { PipesModule } from '../reglamento/pipes.module';  // Importa el módulo de pipes
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-titulacion',
    standalone: true,
    imports: [
        PipesModule,
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './titulacion.component.html',
    styleUrl: './titulacion.component.scss'
})
export class TitulacionComponent implements OnInit {
    titulaciones = [
        { id: 'pdf-container1', name: 'MANUAL DE TITULACIÓN', src: '../../../assets/modules/titulacion/MANUAL DE TITULACION REV TQ 2024-2025 (1)-signed-signed-signed (1).pdf' },
        { id: 'pdf-container2', name: 'CALENDARIO DE TITULACIÓN', src: '../../../assets/modules/titulacion/CRONOGRAMA DE TITULACION.pdf' },
        { id: 'pdf-container3', name: 'CALENDARIO DE EXAMEN COMPLEXIVO', src: '../../../assets/modules/titulacion/CRONOGRAMA EXAMEN COMPLEXIVO.pdf' },
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué titulaciones están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los titulaciones
        this.titulaciones.forEach(titulacion => {
            this.expandedState[titulacion.id] = false;
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }
}
