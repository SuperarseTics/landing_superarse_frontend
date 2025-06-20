import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
    selector: 'app-investigacion-convocatorias-2025',
    standalone: true,
    imports: [CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
    templateUrl : './investigacion-convocatorias-2025.component.html',
    styleUrl: './investigacion-convocatorias-2025.component.scss'
})
export class InvestigacionConvocatoriasComponent{

}
