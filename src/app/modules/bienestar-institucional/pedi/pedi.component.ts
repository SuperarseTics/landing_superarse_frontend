import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';
import { FloatingSubmenuComponent } from '../../components/floating-submenu/floating-submenu.component';

@Component({
    selector: 'app-pedi',
    standalone: true,
    imports: [
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent,
        FloatingSubmenuComponent
    ],
    templateUrl: './pedi.component.html',
    styleUrl: './pedi.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class PediComponent {
}
