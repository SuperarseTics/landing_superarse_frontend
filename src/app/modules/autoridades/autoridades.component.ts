import { Component, ViewEncapsulation } from '@angular/core';
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { FooterComponent } from "../components/footer/footer.component";
import { WhatsappComponent } from '../components/whatsapp/whatsapp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autoridades',
  standalone: true,
  imports: [ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent, FooterComponent, CommonModule],
  templateUrl: './autoridades.component.html',
  styleUrl: './autoridades.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AutoridadesComponent {

    data = [
        {
            name: 'MSc. Verónica Tamayo',
            title: 'RECTORA',
            image: '/assets/modules/autoridades/VARONICA.png',
            email: 'mailto:veronica.tamayo@superarse.edu.ec'
        },
        {
            name: 'MSc. Tatiana Quishpe',
            title: 'VICERRECTORA ACADÉMICA',
            image: '/assets/modules/autoridades/TATIANA QUISHPE.JPG',
            email: 'mailto:tatiana.quishpe@superarse.edu.ec'
        },
        {
            name: 'MSc. Ramiro Obando',
            title: 'DIRECTOR ADMINISTRATIVO FINANCIERO',
            image: '/assets/modules/autoridades/RAMIRO.png',
            email: 'mailto:ramiro.obando@superarse.edu.ec'
        },
        {
            name: 'Téc. Vanessa Salazar',
            title: 'SECRETARIA GENERAL',
            image: '/assets/modules/autoridades/Vanessa Salazar (1).png',
            email: 'mailto:melany.salazar@superarse.edu.ec'
        },
        {
            name: 'Iván Tamayo',
            title: 'PROMOTOR',
            image: '/assets/modules/autoridades/Lic. Ivan Tamayo.png',
            email: 'mailto:ivant@tuhuella.dog'
        }
    ];
}
