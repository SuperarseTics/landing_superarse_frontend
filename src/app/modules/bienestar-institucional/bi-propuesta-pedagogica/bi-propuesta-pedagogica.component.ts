import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-bi-propuesta-pedagogica',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './bi-propuesta-pedagogica.component.html',
    styleUrl: './bi-propuesta-pedagogica.component.scss'
})
export class BiPropuestaPedagogicaComponent {

}
