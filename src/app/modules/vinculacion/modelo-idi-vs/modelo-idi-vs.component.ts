import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-modelo-idi-vs',
    standalone: true,
    imports: [CommonModule, FooterComponent, WhatsappComponent, ShortcutWidgetComponent, MenuWidgetComponent, PdfViewerComponent],
    templateUrl: './modelo-idi-vs.component.html',
    styleUrl: './modelo-idi-vs.component.scss'
})

export class ModeloIdiVsComponent {

}
