import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../reglamento/pipes.module';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrl: './trabaja-con-nosotros.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TrabajaConNosotrosComponent {
}
