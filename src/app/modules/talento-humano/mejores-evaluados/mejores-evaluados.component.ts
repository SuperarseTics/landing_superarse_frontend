import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-mejores-evaluados',
  standalone: true,
  imports: [TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './mejores-evaluados.component.html',
  styleUrl: './mejores-evaluados.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MejoresEvaluadosComponent {
    data = [
        {
            id: 'me-content1',
            name: 'Esteban Torres',
            teacher: '/assets/modules/talento-humano/mejor-evaluado/ESTEBAN TORRES.jpg',
            info: '/assets/modules/talento-humano/mejor-evaluado/ESTEBAN.jpg'
        },
        {
            id: 'me-content2',
            name: 'Iván Yánez',
            teacher: '/assets/modules/talento-humano/mejor-evaluado/IVÁN YÁNEZ.jpg',
            info: '/assets/modules/talento-humano/mejor-evaluado/IVAN.jpg'
        },
        {
            id: 'me-content3',
            name: 'Karina Fabara',
            teacher: '/assets/modules/talento-humano/mejor-evaluado/KARINA FABARA.jpg',
            info: '/assets/modules/talento-humano/mejor-evaluado/KARINA.jpg'
        },
        {
            id: 'me-content4',
            name: 'Dennys Enriquez',
            teacher: '/assets/modules/talento-humano/mejor-evaluado/Profe Crack_Enriquez.jpg',
            info: '/assets/modules/talento-humano/mejor-evaluado/Eriquez.jpg'
        }
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué aranceles están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los aranceles
        this.data.forEach(item => {
            this.expandedState[item.id] = false;
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
        // Colapsar los demás
        Object.keys(this.expandedState).forEach(key => {
            if (key !== id) {
                this.expandedState[key] = false;
            }
        });
    }

}
