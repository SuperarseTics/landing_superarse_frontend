import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";


@Component({
  selector: 'app-investigacion-redes-cientificas',
  standalone: true,
  imports: [CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './investigacion-redes-cientificas.component.html',
  styleUrl: './investigacion-redes-cientificas.component.scss'
})
export class InvestigacionRedesCientificasComponent {

}
