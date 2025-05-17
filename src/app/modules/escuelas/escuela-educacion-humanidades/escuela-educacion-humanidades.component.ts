import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { ActivatedRoute } from '@angular/router';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-escuela-educacion-humanidades',
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
  templateUrl: './escuela-educacion-humanidades.component.html',
  styleUrl: './escuela-educacion-humanidades.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EscuelaEducacionHumanidadesComponent {
    @ViewChild('malla') mallaElement!: ElementRef;

    title: string = 'TODOS';

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get('title') ?? 'TODOS';
        this.title = history.state.title ?? this.title;
    }

    scrollToMalla() {
      if (this.mallaElement) {
        this.mallaElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
