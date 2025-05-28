import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
    selector: 'app-bi-servicios-7',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent
    ],
    templateUrl: './bi-servicios-7.component.html',
    styleUrl: './bi-servicios-7.component.scss'
})
export class BiServicios7Component {
    public counterItems: Array<{ label: string, src: string }> = [
        {
            label: 'Guía del Reglamento de Becas y Ayudas Económicas',
            src: '/assets/modules/bienestar-institucional/SERVICIOS/Guía de Becas_May-Oct2025.pdf'
        },
        {
            label: 'Ficha de Solicitud de Beca',
            src: '/assets/modules/bienestar-institucional/SERVICIOS/FICHA SOLICITUD BECA nov24-abr25.pdf'
        },
        {
            label: 'Ficha Socioeconómica',
            src: '/assets/modules/bienestar-institucional/SERVICIOS/FICHA SOCIOECONÓMICA INSTITUTO SUPERARSE V1 (1).pdf'
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

}
