import { Component,
    OnInit,
    ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../reglamento/pipes.module';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';
import { FloatingSubmenuComponent } from '../../components/floating-submenu/floating-submenu.component';

@Component({
    selector: 'app-aranceles',
    standalone: true,
    imports: [
        PipesModule,
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent,
        FloatingSubmenuComponent
    ],
    templateUrl: './aranceles.component.html',
    styleUrl: './aranceles.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ArancelesComponent implements OnInit {
    aranceles = [
        {
            id: 'pdf-container1',
            name: 'ARANCELES ADMINISTRACIÓN PAO',
            src: '/assets/modules/arancel/ARANCELES ADMINISTRACIÓN PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container2',
            name: 'ARANCELES CC Y PA CURRICULUM 2019 PAO',
            src: '/assets/modules/arancel/ARANCELES CC Y PA CURRICULUM 2019 PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container3',
            name: 'ARANCELES ED BASICA PAO',
            src: '/assets/modules/arancel/ARANCELES ED BASICA PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container4',
            name: 'ARANCELES ED BILINGUE PAO',
            src: '/assets/modules/arancel/ARANCELES ED BILINGUE PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container5',
            name: 'ARANCELES ENFERMERIA VETERINARIA PAO',
            src: '/assets/modules/arancel/ARANCELES ENFERMERIA VETERINARIA PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container6',
            name: 'ARANCELES INSTRUMENTACION QUIRURGICA PAO',
            src: '/assets/modules/arancel/ARANCELES INSTRUMENTACION QUIRURGICA PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container7',
            name: 'ARANCELES MARKETING PAO',
            src: '/assets/modules/arancel/ARANCELES MARKETING PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container8',
            name: 'ARANCELES MINERIA PAO',
            src: '/assets/modules/arancel/ARANCELES MINERIA PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container9',
            name: 'ARANCELES PRODUCCION ANIMAL PAO',
            src: '/assets/modules/arancel/ARANCELES PRODUCCION ANIMAL PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container10',
            name: 'ARANCELES SEGURIDAD RIESGOS PAO',
            src: '/assets/modules/arancel/ARANCELES SEGURIDAD RIESGOS PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container11',
            name: 'ARANCELES SEGURIDAD RIESGOS PAO',
            src: '/assets/modules/arancel/ARANCELES SEGURIDAD RIESGOS PAO NOV2024 ABR2025 V2.0.pdf'
        },
        {
            id: 'pdf-container12',
            name: 'DERECHOS PAO',
            src: '/assets/modules/arancel/DERECHOS PAO NOV24 ABR25 V2.0.pdf'
        }
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué aranceles están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los aranceles
        this.aranceles.forEach(arancel => {
            this.expandedState[arancel.id] = false;
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
