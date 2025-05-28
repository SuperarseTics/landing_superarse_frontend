import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-evaluacion-docente',
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
    templateUrl: './evaluacion-docente.component.html',
    styleUrl: './evaluacion-docente.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class EvaluacionDocenteComponent {

    ulrs: Array<{ id: string, name: string, src: string }> = [
        {
            id: 'pdf-container1',
            name: 'Conoce nuestro Reglamento de Evaluación',
            src: '/assets/modules/evaluacion-docente/REGLAMENTO DE EVALUACION INTEGRAL Y MEJORAMIENTO DEL DESEMPEÑO DEL PERSONAL ACADEMICO (3).pdf'
        },
        {
            id: 'pdf-container2',
            name: 'Descubre el Procedimiento de Evaluación de Actividades de Docencia',
            src: ''
        },
        {
            id: 'pdf-container3',
            name: 'Conoce el modelo Educativo del Tecnológico Superarse',
            src: '/assets/modules/evaluacion-docente/MODELO EDUCATIVO.pdf'
        }
    ];

    screenWidth: number = window.innerWidth;

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateScreenWidth();
    }
    updateScreenWidth() {
        this.screenWidth = window.innerWidth;
    }

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.updateScreenWidth();
    }

    expandedState: { [key: string]: boolean } = {};

    ngOnInit() {
        this.ulrs.forEach(url => {
            this.expandedState[url.id] = false;
        });
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
