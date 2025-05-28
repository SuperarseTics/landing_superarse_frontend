import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-empty-tab',
    standalone: true,
    imports: [
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './empty-tab.component.html',
    styleUrl: './empty-tab.component.scss'
})
export class EmptyTabComponent implements OnInit {

    type: string = 'pdf';
    src: string | null = null;
    title: string | null = null;

    ngOnInit() {
        this.src = history.state.src;
        this.type = history.state.type;
        this.title = history.state.title;

        const iframe = document.createElement('iframe');
        iframe.src = this.src;
        iframe.style.width = '100%';
        iframe.style.height = '80vh';
        iframe.style.border = 'none';

        // Obtener el contenedor donde agregar el iframe
        const container = document.getElementById('pdf-container');
        if (container) {
            container.appendChild(iframe);
        }
    }
}
