import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../components/whatsapp/whatsapp.component';
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-calendario',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './calendario.component.html',
    styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {
selectedOption: string = '';
  sanitizedPdfUrl: SafeResourceUrl | null = null;

  calendarios: { [key: string]: string } = {
    'Calendario Académico': './assets/modules/calendario/CALENDARIO MAYO - OCTUBRE 2025 .pdf',
    'Titulación': './assets/modules/calendario/Calendarios Académicos.pdf',
    'Investigación': './assets/modules/calendario/Calendarios Académicos.pdf',
    'Vinculación': './assets/modules/calendario/Calendarios Académicos.pdf',
    'Prácticas Preprofesionales': './assets/modules/calendario/Calendarios Académicos.pdf'
  };

  constructor(private sanitizer: DomSanitizer) {}

  onSelectChange(option: string) {
    this.selectedOption = option;
    const url = this.calendarios[option];
    this.sanitizedPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
