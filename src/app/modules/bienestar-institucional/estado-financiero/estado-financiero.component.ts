import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';
import { FloatingSubmenuComponent } from '../../components/floating-submenu/floating-submenu.component';

@Component({
    selector: 'app-estado-financiero',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent,
        FloatingSubmenuComponent
    ],
    templateUrl: './estado-financiero.component.html',
    styleUrl: './estado-financiero.component.scss'
})
export class EstadoFinancieroComponent {

}
