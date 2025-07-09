import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';
@Component({
  selector: 'app-practicas-preprofesionales',
  standalone: true,
  imports: [CommonModule, FooterComponent, WhatsappComponent, ShortcutWidgetComponent, MenuWidgetComponent, PdfViewerComponent],
  templateUrl: './practicas-preprofesionales.component.html',
  styleUrl: './practicas-preprofesionales.component.scss'
})
export class PracticasPreprofesionalesComponent implements OnInit {
    data = [
        {
            id: 'pdf-container1',
            name: "Reglamento de Practicas Preprofesionales",
            type: 'pdf',
            /*value: '/assets/modules/vinculación/3017_783_COD_3282_100225173133.pdf',*/
            value: '../../../../assets/modules/vinculación/3017_783_COD_3282_100225173133.pdf'
        },
        {
            id: 'list-container2',
            name: 'Formatos',
            type: 'docx',
            files: [
                {
                    name: 'Informe de prácticas preprofesionales',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-007_ Informe de prácticas preprofesionales.docx'
                },
                {
                    name: 'Informe de seguimiento prácticas preprofesionales',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-008_ Informe de seguimiento prácticas preprofesionales.docx'
                },
                {
                    name: 'Certificado de cumplimiento prácticas preprofesionales',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-009 Certificado de cumplimiento prácticas preprofesionales.docx'
                },
                {
                    name: 'Planificación del Periodo Académico',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-010 Planificación del Periodo Académico.docx'
                },
                {
                    name: 'Solicitud para inicio de prácticas preprofesionales',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-002_ Solicitud para inicio de prácticas preprofesionales.docx'
                },
                {
                    name: 'Oficio para prácticas preprofesionales',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-003_Oficio para prácticas preprofesionales.docx'
                },
                {
                    name: 'Plan de Aprendizaje y rotación',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-004_Plan de Aprendizaje y rotacion.docx'
                },
                {
                    name: 'Ficha de asistencia',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-005_ Ficha de asistencia.docx'
                },
                {
                    name: 'Ficha de evaluación de la EF',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la EF.docx'
                },
                {
                    name: 'Ficha de evaluación de la entidad formadora',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la entidad formadora.docx'
                },
                {
                    name: 'Convocatoria Practicas Preprofesionales',
                    src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-001_ Convocatoria Practicas Preprofesionales.docx'
                },
            ]
        }
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué vinculaciones están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los vinculaciones
        this.data.forEach(vinculacion => {
            // this.expandedState[vinculación.id] = false;
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }
}
