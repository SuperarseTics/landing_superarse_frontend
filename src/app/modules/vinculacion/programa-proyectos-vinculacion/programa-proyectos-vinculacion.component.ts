import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PipesModule } from '../../reglamento/pipes.module';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { Router } from '@angular/router';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-programa-proyectos-vinculacion',
    standalone: true,
    imports: [
        PipesModule,
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './programa-proyectos-vinculacion.component.html',
    styleUrl: './programa-proyectos-vinculacion.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ProgramaProyectosVinculacionComponent implements OnInit {
    data = [
        // SE COMENTA POR QUE EL 18 DE FEB EN LA REUNIÓN PRESENCIAL LO PIDIERON ASI
        // {
        //     id: 'list-container1',
        //     name: 'Modelo de la Gestión de Investigación, Desarrollo e Innovación y Vinculación con la sociedad',
        //     type: 'redirect',
        //     value: '/modelo-idi-vs'
        // },
        {
            id: 'list-container2',
            name: 'Reglamento de Vinculación con la Sociedad',
            type: 'pdf',
            value: '/assets/modules/vinculación/3017_788_COD_3317_120225162423 .pdf'
        },
        {
            id: 'list-container3',
            name: 'Formatos',
            type: 'list-urls',
            files: [
                // SE COMENTA POR QUE EL 18 DE FEB EN LA REUNIÓN PRESENCIAL LO PIDIERON ASI
                // {
                //     id: 'pdf-container1',
                //     type: 'download',
                //     name: 'Practicas Pre-Profesionales',
                //     files: [
                //         {
                //             name: 'Informe de prácticas preprofesionales',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-007_ Informe de prácticas preprofesionales.docx'
                //         },
                //         {
                //             name: 'Informe de seguimiento prácticas preprofesionales',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-008_ Informe de seguimiento prácticas preprofesionales.docx'
                //         },
                //         {
                //             name: 'Certificado de cumplimiento prácticas preprofesionales',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-009 Certificado de cumplimiento prácticas preprofesionales.docx'
                //         },
                //         {
                //             name: 'Planificación del Periodo Académico',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-010 Planificación del Periodo Académico.docx'
                //         },
                //         {
                //             name: 'Solicitud para inicio de prácticas preprofesionales',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-002_ Solicitud para inicio de prácticas preprofesionales.docx'
                //         },
                //         {
                //             name: 'Oficio para prácticas preprofesionales',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-003_Oficio para prácticas preprofesionales.docx'
                //         },
                //         {
                //             name: 'Plan de Aprendizaje y rotacion',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-004_Plan de Aprendizaje y rotacion.docx'
                //         },
                //         {
                //             name: 'Ficha de asistencia',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-005_ Ficha de asistencia.docx'
                //         },
                //         {
                //             name: 'Ficha de evaluacion de la EF',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la EF.docx'
                //         },
                //         {
                //             name: 'Ficha de evaluacion de la entidad formadora',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la entidad formadora.docx'
                //         },
                //         {
                //             name: 'Convocatoria Practicas Preprofesionales',
                //             src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-001_ Convocatoria Practicas Preprofesionales.docx'
                //         },
                //     ]
                // },
                {
                    id: 'pdf-container2',
                    type: 'download',
                    name: 'Vinculación',
                    files: [
                        {
                            name: 'Informe de prácticas preprofesionales',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-007_ Informe de prácticas preprofesionales.docx'
                        },
                        {
                            name: 'Informe de seguimiento prácticas preprofesionales',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-008_ Informe de seguimiento prácticas preprofesionales.docx'
                        },
                        {
                            name: 'Certificado de cumplimiento prácticas preprofesionales',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-009 Certificado de cumplimiento prácticas preprofesionales.docx'
                        },
                        {
                            name: 'Planificación del Periodo Académico',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-010 Planificación del Periodo Académico.docx'
                        },
                        {
                            name: 'Solicitud para inicio de prácticas preprofesionales',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-002_ Solicitud para inicio de prácticas preprofesionales.docx'
                        },
                        {
                            name: 'Oficio para prácticas preprofesionales',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-003_Oficio para prácticas preprofesionales.docx'
                        },
                        {
                            name: 'Plan de Aprendizaje y rotacion',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-004_Plan de Aprendizaje y rotacion.docx'
                        },
                        {
                            name: 'Ficha de asistencia',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-005_ Ficha de asistencia.docx'
                        },
                        {
                            name: 'Ficha de evaluacion de la EF',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la EF.docx'
                        },
                        {
                            name: 'Ficha de evaluacion de la entidad formadora',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la entidad formadora.docx'
                        },
                        {
                            name: 'Convocatoria Practicas Preprofesionales',
                            src: '../../../assets/modules/vinculación/Formatos-Vinculación/ISTS-GIDIVS-05-001_ Convocatoria Practicas Preprofesionales.docx'
                        },
                    ]
                },
            ]
        },
        {
            id: 'pdf-container3',
            name: 'Programas de Vinculación con la Sociedad',
            type: 'list-pdfs',
            files: [
                {
                    id: 'pdf1-container3',
                    name: 'Mayo - Octubre 2024',
                    src: '/assets/modules/vinculación/programa-proyectos-vinculacion/PROGRAMAS Y PROYECTOS_ MAYO - OCTUBRE 2024.pdf'
                },
                {
                    id: 'pdf2-container3',
                    name: 'Noviembre 2023 - Abril 2024',
                    src: '/assets/modules/vinculación/programa-proyectos-vinculacion/PROGRAMAS Y PROYECTOS _ NOV 2023 - ABRIL 2024.pdf'
                }
            ]

        },
        {
            name: 'Proyectos de Vinculación con la Sociedad',
            type: 'list-sublist',
            files: [
                {
                    id: 'list-sub-container1',
                    name: 'BIENESTAR ANIMAL',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/Logo-Bienestar-ACTUALIZADO-JULIO-2024.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Bienestar Animal'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: 'Salud y Producción Animal'
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'text',
                            value: 'Bienestar Animal'
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Fomentar el bienestar de los animales de compañía del cantón Rumiñahui mediante la implementación de capacitaciones comunitarias sobre cuidados esenciales de los animales de compañía en las comunidades rurales y una campaña de vacunación masiva de perros y gatos incluyendo chequeos médicos, desparasitaciones y administración de vitaminas, contribuyendo al desarrollo de una cultura de respeto y cuidado responsable hacia los animales.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Tenedores de Animales de Compañía de Rumiñahui'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Estudiantes de la Escuela de Veterinaria'
                        },
                        {
                            field: 'Impacto',
                            type: 'text',
                            value: ''
                        }
                    ]
                },
                {
                    id: 'list-sub-container2',
                    name: 'ECOHUELLA',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/RSE ECOHUELLA_Mesa de trabajo 1.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Bienestar Animal'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Institucional'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: 'Ciencias de la Educación'
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Promover la concientización ambiental y desarrollo de una cultura medioambiental de las comunidades rurales del Cantón Rumiñahui mediante el trabajo colaborativo con los estudiantes del Instituto Superior Tecnológico Superarse.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Comunidad de Rumiñahui'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Instituto Superarse'
                        },
                        {
                            field: 'Impacto',
                            type: 'text',
                            value: 'Ambiental - Social'
                        }
                    ]
                },
                {
                    id: 'list-sub-container3',
                    name: 'SUPERACIÓN EMPRESARIAL: CUNA DE EMPRENDEDORES',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/CUNA DE EMPRENDEDORES_Mesa de trabajo 1.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Superación Empresarial: Cuna de Emprendedores'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: ''
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'text',
                            value: ''
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Impulsar los emprendimientos de las diferentes localidades a nivel nacional mediante la implementación de una incubadora de emprendimiento del instituto Superarse donde se brindará asesoría en administración y marketing digital para contribuir al crecimiento sostenible de nuevos proyectos empresariales.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Emprendedores a nivel nacional'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Estudiantes de la carrera de la Escuela de Administración y Humanidades.'
                        },
                        {
                            field: 'Impacto',
                            type: 'image',
                            value: []
                        },
                        {
                            field: 'Link del Video de Socialización',
                            type: 'video',
                            value: ''
                        }
                    ]
                },
                {
                    id: 'list-sub-container4',
                    name: 'INNOVACIÓN Y FORMACIÓN EN TOPOGRAFÍA - INFOTOP',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/proyecto_vinculación_cuna.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Innovación y Formación en Topografía - INFOTOP'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: ''
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'text',
                            value: ''
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Brindar apoyo a las comunidades de la parroquia Miguel Egas Cabezas mediante la recolección de datos precisos para la elaboración de un informe topográfico dirigido al GAD Parroquial, con el objetivo de facilitar la aprobación de proyectos clave como sistemas de alcantarillado, suministro de agua potable y mejoramiento de vías. Adicionalmente, realizar charlas de concientización sobre la construcción en zonas de alto riesgo, promoviendo la prevención, el uso responsable del territorio con el fin de contribuir al desarrollo sostenible y la seguridad integral de la parroquia.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Emprendedores a nivel nacional'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Estudiantes de la carrera de la Escuela de Construcción y extracción sostenible.'
                        },
                        {
                            field: 'Impacto',
                            type: 'image',
                            value: []
                        },
                        {
                            field: 'Link del Video de Socialización',
                            type: 'video',
                            value: ''
                        }
                    ]
                },
                {
                    id: 'list-sub-container5',
                    name: 'INTEGRANIMAL - PRODUCCIÓN ANIMAL',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/Logo-IntegraAnimal-Positivo.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Integranimal - Producción Animal'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: 'Salud y Producción Animal'
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'text',
                            value: 'Nutrición Animal'
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Fomentar el desarrollo sostenible de prácticas pecuarias responsables mediante la implementación de capacitaciones comunitarias sobre el manejo adecuado de especies de producción, así como la elaboración de bloques nutricionales a base de desechos vegetales como alternativas para la suplementación de bovinos; contribuyendo a una producción animal eficiente, ética y sostenible.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Productores Pecuarios de la Parroquia de Rumipamba'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Estudiantes de la carrera de Producción Animal'
                        },
                        {
                            field: 'Impacto',
                            type: 'image',
                            value: [
                                '../../../assets/modules/vinculación/Integranimal – Producción Animal.png'
                            ]
                        },
                        {
                            field: 'Link del Video de Socialización',
                            type: 'video',
                            value: ''
                        }
                    ]
                },
                {
                    id: 'list-sub-container6',
                    name: 'INTEGRANIMAL - CUIDADO CANINO',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/Logo-IntegraAnimal-Positivo.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Integranimal - Cuidado Canino'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: 'Salud y Producción Animal'
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'text',
                            value: 'Bienestar Animal'
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Fomentar el bienestar de los animales de compañía de la Parroquia Pintag mediante la implementación de capacitaciones comunitarias sobre cuidados esenciales, incluyendo chequeos médicos, desparasitaciones y administración de vitaminas en refugios, contribuyendo al desarrollo de una cultura de respeto y cuidado responsable hacia los animales.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Tenedores de Animales de la parroquia de Pintag'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Estudiantes de la carrera de Cuidado Canino'
                        },
                        {
                            field: 'Impacto',
                            type: 'image',
                            value: [
                                '../../../assets/modules/vinculación/Integranimal – Cuidado Canino.png',
                                '../../../assets/modules/vinculación/Integranimal – Cuidado Canino 2.png'
                            ]
                        },
                        {
                            field: 'Link del Video de Socialización',
                            type: 'video',
                            value: ''
                        }
                    ]
                },
                {
                    id: 'list-sub-container7',
                    name: 'RESPONSABILIDAD SOCIAL EMPRESARIAL Y GESTIÓN AMBIENTAL PARA EMPRENDIMIENTOS - ECOHUELLA',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/FINAL-LogoEcoHuellaSuperarse_1 (1).jpg',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Responsabilidad Social Empresarial Y Gestión Ambiental Para Emprendimientos - Ecohuella'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: 'Ciencias de la Educación'
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'text',
                            value: 'Educación Ambiental'
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Promover la responsabilidad social empresarial y gestión ambiental a través de capacitaciones que generen sensibilización de la comunidad sobre la importancia de la educación ambiental y la implementación de prácticas responsables del cuidado del medio ambiente, fomentando un desarrollo económico que garantice el uso eficiente de los recursos naturales y el bienestar social a largo plazo para la sensibilización y aplicación de buenas prácticas en emprendimientos locales donde se encuentran las instituciones participantes.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Emprendedores a nivel nacional'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Estudiantes de todas las carreras'
                        },
                        {
                            field: 'Impacto',
                            type: 'image',
                            value: [
                                '../../../assets/modules/vinculación/Responsabilidad Social Empresarial Y Gestión Ambiental Para Emprendimientos – Ecohuella.png'
                            ]
                        },
                        {
                            field: 'Link del Video de Socialización',
                            type: 'video',
                            value: ''
                        }
                    ]
                },
                // {
                //     id: 'list-sub-container8',
                //     name: 'GEOIMPACTO',
                //     type: 'list',
                //     logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/LOGO GEODUCACION.png',
                //     web_tab: true,
                //     files: [
                //         {
                //             field: 'Proyecto',
                //             type: 'text',
                //             value: 'Responsabilidad Social Empresarial Y Gestión Ambiental Para Emprendimientos - Ecohuella'
                //         },
                //         {
                //             field: 'Tipo de Proyecto',
                //             type: 'text',
                //             value: 'Formativo por Carrera'
                //         },
                //         {
                //             field: 'Línea de Investigación',
                //             type: 'text',
                //             value: 'Ciencias de la Educación'
                //         },
                //         {
                //             field: 'Educación Sublíneas',
                //             type: 'text',
                //             value: 'Inteligencia Artificial y Realidad Aumentada'
                //         },
                //         {
                //             field: 'Objetivo',
                //             type: 'text',
                //             value: 'Fomentar el desarrollo de competencias lectoras en niños y niñas de 6 a 8 años con necesidades educativas especiales de la comunidad de Huamboya, a través de la implementación de un programa de lectura basado en cuentos generados por inteligencia artificial generativa, fortaleciendo su inclusión educativa y promoviendo el amor por la lectura y el desarrollo de conciencia medio ambiental.'
                //         },
                //         {
                //             field: 'Beneficiarios',
                //             type: 'text',
                //             value: 'Niños y niñas de nivel de educación básica con énfasis en necesidades educativas a nivel nacional'
                //         },
                //         {
                //             field: 'Ejecutores',
                //             type: 'text',
                //             value: 'Estudiantes de la Escuela de Educación y Humanidades'
                //         },
                //         {
                //             field: 'Impacto',
                //             type: 'image',
                //             value: [
                //                 '../../../assets/modules/vinculación/GEOIMPACTO.png'
                //             ]
                //         },
                //         {
                //             field: 'Link del Video de Socialización',
                //             type: 'video',
                //             value: ''
                //         }
                //     ]
                // },
                {
                    id: 'list-sub-container9',
                    name: 'CUENTOS QUE CONECTAN',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/CUENTOS QUE CONECTAN_Mesa de trabajo 1.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Cuentos que conectan'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: 'Ciencias de la Educación'
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'text',
                            value: 'Educación Ambiental'
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Fomentar el desarrollo de competencias lectoras en niños y niñas de 6 a 8 años con necesidades educativas especiales de la comunidad de Huamboya, a través de la implementación de un programa de lectura basado en cuentos generados por inteligencia artificial generativa, fortaleciendo su inclusión educativa y promoviendo el amor por la lectura y el desarrollo de conciencia medio ambiental.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Emprendedores a nivel nacional'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Emprendedores a nivel nacional'
                        },
                        {
                            field: 'Impacto',
                            type: 'image',
                            value: [
                                '../../../assets/modules/vinculación/CUENTOS QUE CONECTAN.png'
                            ]
                        },
                        {
                            field: 'Link del Video de Socialización',
                            type: 'video',
                            value: ''
                        }
                    ]
                },
                {
                    id: 'list-sub-container10',
                    name: 'EMPRENDE SUPERARSE',
                    type: 'list',
                    logo: '/assets/modules/vinculación/programa-proyectos-vinculacion/EMPRENDE SUPERARSE_Mesa de trabajo 1.png',
                    web_tab: true,
                    files: [
                        {
                            field: 'Proyecto',
                            type: 'text',
                            value: 'Responsabilidad Social Empresarial Y Gestión Ambiental Para Emprendimientos - Ecohuella'
                        },
                        {
                            field: 'Tipo de Proyecto',
                            type: 'text',
                            value: 'Formativo por Carrera'
                        },
                        {
                            field: 'Línea de Investigación',
                            type: 'text',
                            value: 'Ciencias de la Educación'
                        },
                        {
                            field: 'Educación Sublíneas',
                            type: 'list',
                            value: [
                                'Gestión Administrativa',
                                'Marketing y Transformación digital'
                            ]
                        },
                        {
                            field: 'Objetivo',
                            type: 'text',
                            value: 'Impulsar el desarrollo económico de la comunidad de Rumipamba mediante la capacitación en emprendimiento en áreas administrativas y gestión de marketing digital, lo cual, permitirá la autogestión comunitaria y la creación de emprendimientos locales sostenibles, contribuyendo al desarrollo económico y social alineado en colaboración con el GAD de Rumipamba.'
                        },
                        {
                            field: 'Beneficiarios',
                            type: 'text',
                            value: 'Emprendedores a nivel nacional'
                        },
                        {
                            field: 'Ejecutores',
                            type: 'text',
                            value: 'Estudiantes de la escuela de Administración e Industrias'
                        },
                        {
                            field: 'Impacto',
                            type: 'image',
                            value: [
                                '../../../assets/modules/vinculación/EMPRENDE SUPERARSE.png'
                            ]
                        },
                        {
                            field: 'Link del Video de Socialización',
                            type: 'video',
                            value: ''
                        }
                    ]
                }
            ]
        },
        // {
        //     id: 'list-container4',
        //     name: 'Presencia en la Comunidad',
        //     type: 'redirect',
        //     value: '/presencia-comunidad'
        // },
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué vinculaciones están desplegados
    expandedStatePDFs: { [key: string]: boolean } = {}; // Controla qué aranceles están desplegados

    constructor(private router: Router) { }

    ngOnInit() {
        // Inicializar estado colapsado para todos los vinculaciones
        this.data.forEach(vinculacion => {
            this.expandedState[vinculacion.id] = false;
            if (vinculacion.type == 'list-pdfs') {
                this.expandedStatePDFs[vinculacion.id] = false;
            }
            if (vinculacion.type == 'list-pdfs') {
                vinculacion.files.forEach(file => {
                    this.expandedStatePDFs[file.id] = false;
                });
            }
        });
    }

    toggleExpansionPFDs(id: string) {
        this.expandedStatePDFs[id] = !this.expandedStatePDFs[id];
        // Colapsar los demás
        Object.keys(this.expandedStatePDFs).forEach(key => {
            if (key !== id) {
                this.expandedStatePDFs[key] = false;
            }
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }

    redirigir(route, title, data, logo) {
        this.router.navigate([`${route}/${title}`], {
            state: {
                title,
                data,
                logo
            }
        });
    }
}
