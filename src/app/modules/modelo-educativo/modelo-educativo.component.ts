import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../components/whatsapp/whatsapp.component';
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-modelo-educativo',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './modelo-educativo.component.html',
    styleUrl: './modelo-educativo.component.scss'
})
export class ModeloEducativoComponent {

}
