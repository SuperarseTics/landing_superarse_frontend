import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-bolsa-empleo',
  standalone: true,
  imports: [
      TimelineModule,
      CommonModule,
      FooterComponent,
      ShortcutWidgetComponent,
      MenuWidgetComponent,
      WhatsappComponent
  ],
  templateUrl: './bolsa-empleo.component.html',
  styleUrl: './bolsa-empleo.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BolsaEmpleoComponent {

    images = [
        '../../../assets/modules/bienestar-institucional/OFERTAS LABORALES 1.jpg',
        '../../../assets/modules/bienestar-institucional/OFERTAS LABORALES 3.jpg',
        '../../../assets/modules/bienestar-institucional/OFERTAS LABORALES 4.jpg'
    ];

    public counterItems: Array<{ label: string, src: string }> = [
        {
            label: 'FORMULARIO SUPER-GRADUADOS',
            src: 'https://forms.office.com/pages/responsepage.aspx?id=Q55kP6NREkOuuxxVvxRacOeRdYpTl6NFhvgoxN1LIAZUMzBDUDZPUjdWNVVIRUsyQlVWVTA3OFc4Vy4u&origin=lprLink&route=shorturl'
        },
        {
            label: 'REGISTRO PARA EMPRESAS',
            src: 'https://forms.office.com/pages/responsepage.aspx?id=Q55kP6NREkOuuxxVvxRacOeRdYpTl6NFhvgoxN1LIAZUMzlRSEowT1haNTBRM1kxTUNEQTE0M0E1VC4u&origin=lprLink&route=shorturl'
        },
        {
            label: 'BOLSA DE EMPLEO GRUPO WHATSAPP',
            src: 'https://chat.whatsapp.com/IBpVozk9DoSLaviy1kRb3Z'
        },
        {
            label: 'FACEBOOK GRUPO DE GRADUADOS',
            src: 'https://www.facebook.com/groups/graduadosuperarse/'
        }
    ];

    screenWidth: number = window.innerWidth;

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateScreenWidth();
    }
    updateScreenWidth() {
        this.screenWidth = window.innerWidth;
    }

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.updateScreenWidth();
    }
}
