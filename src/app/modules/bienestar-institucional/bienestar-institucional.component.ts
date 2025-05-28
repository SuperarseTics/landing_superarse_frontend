import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
    selector: 'app-bienestar-institucional',
    standalone: true,
    imports: [
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent
    ],
    templateUrl: './bienestar-institucional.component.html',
    styleUrl: './bienestar-institucional.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class BienestarInstitucionalComponent {

    images = [
        '../../../assets/modules/bienestar-institucional/OFERTAS LABORALES 1.jpg',
        '../../../assets/modules/bienestar-institucional/OFERTAS LABORALES 3.jpg',
        '../../../assets/modules/bienestar-institucional/OFERTAS LABORALES 4.jpg'
    ];

}
