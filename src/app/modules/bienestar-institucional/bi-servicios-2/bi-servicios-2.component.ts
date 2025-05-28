import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
    selector: 'app-bi-servicios-2',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent
    ],
    templateUrl: './bi-servicios-2.component.html',
    styleUrl: './bi-servicios-2.component.scss'
})
export class BiServicios2Component {

}
