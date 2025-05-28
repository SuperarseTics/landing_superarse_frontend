import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-modelo-pedagogico',
    standalone: true,
    imports: [TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent, PdfViewerComponent],
    templateUrl: './modelo-pedagogico.component.html',
    styleUrl: './modelo-pedagogico.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ModeloPedagogicoComponent {
}
