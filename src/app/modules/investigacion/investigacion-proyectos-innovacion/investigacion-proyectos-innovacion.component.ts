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
  selector: 'app-investigacion-proyectos-innovacion',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent, PdfViewerComponent],
  templateUrl: './investigacion-proyectos-innovacion.component.html',
  styleUrl: './investigacion-proyectos-innovacion.component.scss'
})
export class InvestigacionProyectosInnovacionComponent {
    data = [
        {
            id: 'pdf-content1',
            name: 'Proyecto final Astudillo Ortega',
            src: '/assets/modules/investigación/investigacion-proyectos-innovacion/PROYECTO_FINAL_ASTUDILLO_ORTEGA20250220_14142953.pdf'
        },
        {
            id: 'pdf-content2',
            name: 'Proyecto final Enriquez Toscano',
            src: '/assets/modules/investigación/investigacion-proyectos-innovacion/PROYECTO_FINAL_ENRIQUEZ_TOSCANO.pdf'
        },
        {
            id: 'pdf-content3',
            name: 'Proyecto final Proaño Fabara',
            src: '/assets/modules/investigación/investigacion-proyectos-innovacion/PROYECTO_FINAL_PROAÑO_FABARA.pdf'
        },
        {
            id: 'pdf-content4',
            name: 'Proyecto final Ramirez',
            src: '/assets/modules/investigación/investigacion-proyectos-innovacion/PROYECTO_FINAL_RAMIREZ.pdf'
        },
        {
            id: 'pdf-content5',
            name: 'Proyecto final Salguera Zacarias',
            src: '/assets/modules/investigación/investigacion-proyectos-innovacion/PROYECTO_FINAL_SALGUERO_ZACARIAS.pdf'
        },
        {
            id: 'pdf-content6',
            name: 'Proyecto final Torres',
            src: '/assets/modules/investigación/investigacion-proyectos-innovacion/PROYECTO_FINAL_TORRES.pdf'
        },
        {
            id: 'pdf-content7',
            name: 'Proyecto final Vasquez Morales',
            src: '/assets/modules/investigación/investigacion-proyectos-innovacion/PROYECTO_FINAL_VASQUEZ_MORALES.pdf'
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
