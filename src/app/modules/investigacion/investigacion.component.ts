import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { PipesModule } from '../reglamento/pipes.module';
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
    selector: 'app-investigación',
    standalone: true,
    imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
    templateUrl: './investigacion.component.html',
    styleUrl: './investigacion.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class InvestigacionComponent implements OnInit {
    investigaciones = [
        {
            name: '',
            files: [
                {id: 'pdf-container1', name: 'Lineas de Investigacion', src: '../../../assets/modules/investigación/Lineas de Investigacion.pdf' },
                {id: 'pdf-container2', name: 'Modelo de Investigación, Desarrollo, Innovación y Vinculación con la sociedad', src: '../../../assets/modules/investigación/MODELO DE INVESTIGACIÓN, DESARROLLO, INNOVACIÓN Y VINCULACIÓN CON LA SOCIEDAD.pdf' },
            ]
        },
        {
            name: 'Convocatoria',
            files: [
                {id: 'pdf-container3', name: 'Reglamento de Investigación, Desarrollo e Innovación', src: '../../../assets/modules/investigación/REGLAMENTO DE INVESTIGACIÓN, DESARROLLO E INNOVACION.pdf' },
                {id: 'pdf-container4', name: 'ISTS GIDVS', src: '../../../assets/modules/investigación/ISTS-GIDIVS-02-001 Convocatoria Pao NOV2024-ABR2025.pdf' },
            ]
        }
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué investigaciónes están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los investigaciónes
        this.investigaciones.forEach(investigacion => {
            // this.expandedState[investigación.id] = false;
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }
}
