import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { ActivatedRoute } from '@angular/router';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-escuela-construccion-extraccion',
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
  templateUrl: './escuela-construccion-extraccion.component.html',
  styleUrl: './escuela-construccion-extraccion.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EscuelaConstruccionExtraccionComponent {


    constructor(
        @Inject(DOCUMENT) private document: Document,
        private route: ActivatedRoute
    ) { }

    title: string = 'TODOS';

    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get('title') ?? 'TODOS';
        this.title = history.state.title ?? this.title;
    }

    scrollToMalla(id: string) {
        const element = this.document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

}
