import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-equipo-trabajo',
  standalone: true,
  imports: [CommonModule, FooterComponent, WhatsappComponent, ShortcutWidgetComponent, MenuWidgetComponent],
  templateUrl: './equipo-trabajo.component.html',
  styleUrl: './equipo-trabajo.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EquipoTrabajoComponent {

    data = [
        {
            name: 'Equipo de Trabajo',
            files: [
                {
                    id: 'container5',
                    type: 'list',
                    name: 'Programas y proyectos de Vinculación',
                    files: [
                        {
                            field: 'Nombre',
                            type: 'text_field',
                            value: 'Lcda. Elena Quezada, MBA'
                        },
                        {
                            field: 'Correo',
                            type: 'text_field',
                            value: 'elena.quezada@superarse.edu.ec'
                        },
                        {
                            field: 'Teléfono',
                            type: 'text_field',
                            value: '(02) 393-0980 Ext. 206'
                        }
                    ]
                },
                {
                    id: 'container6',
                    type: 'list',
                    name: 'Practicas Preprofesionales',
                    files: [
                        {
                            field: 'Nombre',
                            type: 'text_field',
                            value: 'Lcda. Elena Quezada, MBA'
                        },
                        {
                            field: 'Correo',
                            type: 'text_field',
                            value: 'elena.quezada@superarse.edu.ec'
                        },
                        {
                            field: 'Teléfono',
                            type: 'text_field',
                            value: '(02) 393-0980 Ext. 206'
                        }
                    ]
                },
                {
                    id: 'container7',
                    type: 'list',
                    name: 'Relaciones Interinstitucionales',
                    files: [
                        {
                            field: 'Nombre',
                            type: 'text_field',
                            value: 'Lcda. Elena Quezada, MBA'
                        },
                        {
                            field: 'Correo',
                            type: 'text_field',
                            value: 'elena.quezada@superarse.edu.ec'
                        },
                        {
                            field: 'Teléfono',
                            type: 'text_field',
                            value: '(02) 393-0980 Ext. 206'
                        }
                    ]
                }
            ]
        }
    ];

}
