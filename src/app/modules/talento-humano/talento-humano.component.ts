import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { PipesModule } from '../reglamento/pipes.module';
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
    selector: 'app-talento-humano',
    standalone: true,
    imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
    templateUrl: './talento-humano.component.html',
    styleUrl: './talento-humano.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class TalentoHumanoComponent implements OnInit {
    files = [
        { id: 'pdf-container1', name: 'ESCUELA DE ADMINISTRACIÓN E INDUSTRIA', src: '../../../assets/modules/talento-humano/ESCUELA DE ADMINISTRACIÒN E INDUSTRIA - TALENTO HUMANO.pdf' },
        { id: 'pdf-container2', name: 'ESCUELA DE CONSTRUCCIÓN Y EXTRACCIÒN SOSTENIBLE', src: '../../../assets/modules/talento-humano/ESCUELA DE CONSTRUCCIÒN Y EXTRACCIÒN SOSTENIBLE - TAENTO HUMAN.pdf' },
        { id: 'pdf-container3', name: 'ESCUELA DE EDUCACIÓN E HUMANIDADES', src: '../../../assets/modules/talento-humano/ESCUELA DE EDUCACIÒN E HUMANIDADES - talento humano.pdf' },
        { id: 'pdf-container4', name: 'ESCUELA DE VETERINARIA', src: '../../../assets/modules/talento-humano/ESCUELA DE VETERINARIA - talento humano.pdf' },
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué files están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los files
        this.files.forEach(file => {
            this.expandedState[file.id] = false;
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }
}
