import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
    selector: 'app-bi-servicios-4',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent
    ],
    templateUrl: './bi-servicios-4.component.html',
    styleUrl: './bi-servicios-4.component.scss'
})
export class BiServicios4Component {
    public counterItems: Array<{ label: string, src: string }> = [
        {
            label: 'Bolsa de Empleo-Comunidad de Whatsapp',
            src: 'https://chat.whatsapp.com/IBpVozk9DoSLaviy1kRb3Z'
        },
        {
            label: 'Bolsa de Empleo-Grupo de Facebook',
            src: 'https://www.facebook.com/groups/graduadosuperarse/'
        },
        {
            label: 'Formulario Alumni para recién graduados',
            src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=Q55kP6NREkOuuxxVvxRacM1iUyNvm6NAt-AsANiElZxURFJDREdYRTREMkFGU0VITlBGSDkxUlQxRC4u'
        },
        {
            label: 'Registro para empresas',
            src: 'https://forms.office.com/pages/responsepage.aspx?id=Q55kP6NREkOuuxxVvxRacOeRdYpTl6NFhvgoxN1LIAZUMzlRSEowT1haNTBRM1kxTUNEQTE0M0E1VC4u&origin=lprLink&route=shorturl'
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
