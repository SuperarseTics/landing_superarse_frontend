import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { ValoresComponent } from "../valores/valores.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";

@Component({
  selector: 'app-mensaje-rectora',
  standalone: true,
  imports: [TimelineModule, CommonModule, FooterComponent, WhatsappComponent, ShortcutWidgetComponent, MenuWidgetComponent],
  templateUrl: './mensaje-rectora.component.html',
  styleUrl: './mensaje-rectora.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class MensajeRectoraComponent {

}
