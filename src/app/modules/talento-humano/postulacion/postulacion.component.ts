import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../reglamento/pipes.module';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-postulacion',
    standalone: true,
    imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
    templateUrl: './postulacion.component.html',
    styleUrl: './postulacion.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class PostulacionComponent {

    constructor(private router: Router) { }

    data1 = [
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
    data2 = [
        {
            title : 'Requisitos',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Educación y Humanidades',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Noviembre2023-Abril2024/Escuela de educación y Humanidades.pdf'
                },
                {
                    title: 'Escuela de construcción y extracción sostenible',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Noviembre2023-Abril2024/Escuela de Construcción y extracción sostenible.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Noviembre2023-Abril2024/Escuela de Veterinaria.pdf'
                },
                {
                    title: 'Escuela de Administración e Industria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Noviembre2023-Abril2024/Escuela de Administración e Industria.pdf'
                }
            ]
        },
        {
            title : 'Resultados',
            type: 'one',
            files : [
                {
                    title: '',
                    type: '',
                    src: ''
                }
            ]
        }
    ];
    data3 = [
        {
            title : 'Requisitos',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Educación y Humanidades',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Mayo-Octubre2024/Escuela de Educación.pdf'
                },
                {
                    title: 'Escuela de construcción y extracción sostenible',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Mayo-Octubre2024/Escuela de Construcción.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Mayo-Octubre2024/Escuela de Veterinaria.pdf'
                },
                {
                    title: 'Escuela de Administración e Industria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Mayo-Octubre2024/Escuela de Administración e Industria.pdf'
                }
            ]
        },
        {
            title : 'Resultados',
            type: 'one',
            files : [
                {
                    title: '',
                    type: '',
                    src: ''
                }
            ]
        }
    ];
    data4 = [
        {
            title : 'Requisitos',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Educación y Humanidades',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ESCUELA DE EDUCACIÒN E HUMANIDADES.pdf'
                },
                {
                    title: 'Escuela de construcción y extracción sostenible',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/ESCUELA DE CONSTRUCCIÒN Y EXTRACCIÒN SOSTENIBLE.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ESCUELA DE VETERINARIA.pdf'
                },
                {
                    title: 'Escuela de Administración e Industria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ESCUELA DE ADMINISTRACIÒN E INDUSTRIA.pdf'
                }
            ]
        },
        {
            title : 'Resultados',
            type: 'one',
            files : [
                {
                    title: '',
                    type: '',
                    src: ''
                }
            ]
        }
    ];

    redirigir(route, opt, title, subtitle) {
        const data = (opt == 'data1') ? this.data1 : ((opt == 'data2') ? this.data2 : ((opt == 'data3') ? this.data3 : ((opt == 'data4') ? this.data4 : null)));
        this.router.navigate([`${route}`], {
            state: {
                // data: this.data1,
                data: data,
                title: title,
                subtitle: subtitle
            }
        });
    }

}
