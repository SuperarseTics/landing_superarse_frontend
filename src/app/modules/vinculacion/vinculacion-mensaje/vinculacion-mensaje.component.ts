import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-vinculacion-mensaje',
  standalone: true,
  imports: [CommonModule, FooterComponent, WhatsappComponent, ShortcutWidgetComponent, MenuWidgetComponent],
  templateUrl: './vinculacion-mensaje.component.html',
  styleUrl: './vinculacion-mensaje.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class VinculacionMensajeComponent {

}
