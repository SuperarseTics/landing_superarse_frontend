import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../../reglamento/pipes.module';
import { WhatsappComponent } from "../../../components/whatsapp/whatsapp.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores-titulares',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './profesores-titulares.component.html',
  styleUrl: './profesores-titulares.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProfesoresTitularesComponent implements OnInit {

    constructor(private router: Router) { }

    data = [
        {
            title: '',
            type: 'one',
            files : [
                {
                    title: 'Convocatoria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/CONVOCATORIA MERITOS Y OPOSICION FINAL.pdf'
                }
            ]
        },
        {
            title: '',
            type: 'one',
            files : [
                {
                    title: 'Formato hoja de vida',
                    type: 'download',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Formato hoja de vida.docx',
                }
            ]
        },
        {
            title : 'Acta de Resultados Fase de Méritos',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Administración e Industria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Fase de Méritos/Acta de Resultados Fase de Méritos Escuela de Administración e Industria_rotated.pdf'
                },
                {
                    title: 'Escuela de Educación',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Fase de Méritos/Acta de Resultados Fase de Méritos Escuela de Educación.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Fase de Méritos/Acta de Resultados Fase de Méritos Escuela de Veterinaria.pdf'
                }
            ]
        },
        {
            title : 'Acta de Resultados Fase de Oposición',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Educación y Humanidades',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Fase de Oposición/Acta de Resultados Fase de Oposición Escuela de Educación.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Fase de Oposición/Acta de Resultados Fase de Oposición Escuela de Veterinaria.pdf'
                },
                {
                    title: 'Escuela de Administración e Industria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Fase de Oposición/Acta de Resultados Fase de Oposición Escuela de Administración e Industria_rotated.pdf'
                }
            ]
        },
        {
            title : 'Acta de Resultados Finales',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Educación y Humanidades',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Finales/Acta de Resultados Finales Escuela de Educación.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Finales/Acta de Resultados Finales Escuela de Veterinaria.pdf'
                },
                {
                    title: 'Escuela de Administración e Industria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de Resultados Finales/Acta de Resultados Finales Escuela de Administración e Industria_rotated.pdf'
                }
            ]
        },
        {
            title : 'Acta de Declaratoria del Ganador',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Educación y Humanidades',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de declaratoria del ganador/Acta de declaratoria del ganador Escuela de Educación.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de declaratoria del ganador/Acta de Declaratoria del Ganador Escuela de Veterinaria.pdf'
                },
                {
                    title: 'Escuela de Administración e Industria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-titulares/Acta de declaratoria del ganador/Acta de Resultados Declaratoria del Ganador Escuela de Administración e Industria_rotated.pdf'
                }
            ]
        }
    ];
    title = 'Concurso de Méritos y Oposición para Profesores Titulares';
    subtitle = 'Período Académico (mayo - octubre 2024)';

    ngOnInit() {
    }

    redirigir(route, title, src, type) {
        this.router.navigate([`${route}`], {
            state: {
                title,
                src,
                type
            }
        });
    }
}
