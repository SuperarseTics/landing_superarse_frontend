import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { PipesModule } from '../reglamento/pipes.module';
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
    selector: 'app-vinculacion',
    standalone: true,
    imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
    templateUrl: './vinculacion.component.html',
    styleUrl: './vinculacion.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class VinculacionComponent implements OnInit {
    vinculaciones = [
        {
            name: 'Modelo de IDI y VS',
            web_tab: true,
            files: [
                {
                    id: 'pdf-container1',
                    type: 'pdf',
                    name: 'Modelo de la Gestión de Investigación, Desarrollo e Innovación y Vinculación con la sociedad',
                    src: '../../../assets/modules/vinculación/MODELO DE INVESTIGACIÓN Y VINCULACIÓN.pdf'
                },
                // {
                //     id: 'pdf-container2',
                //     type: 'pdf',
                //     name: 'Relamento de prácticas Pre-Profesionales',
                //     src: '../../../assets/modules/vinculación/REGLAMENTO DE PRÁCTICAS PRE-PROFESIONALES (3).pdf'
                // },
                // {
                //     id: 'pdf-container3',
                //     type: 'pdf',
                //     name: 'Reglamento de Vinculación',
                //     src: '../../../assets/modules/vinculación/REGLAMENTO DE VINCULACIÓN CORRECTO.pdf'
                // },
            ]
        },
        {
            name: 'Formatos',
            web_tab: true,
            files: [
                {
                    id: 'pdf-container4',
                    type: 'download',
                    name: 'Practicas Pre-Profesionales',
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
                            name: 'Plan de Aprendizaje y rotacion',
                            src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-004_Plan de Aprendizaje y rotacion.docx'
                        },
                        {
                            name: 'Ficha de asistencia',
                            src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-005_ Ficha de asistencia.docx'
                        },
                        {
                            name: 'Ficha de evaluacion de la EF',
                            src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la EF.docx'
                        },
                        {
                            name: 'Ficha de evaluacion de la entidad formadora',
                            src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-006_ Ficha de evaluacion de la entidad formadora.docx'
                        },
                        {
                            name: 'Convocatoria Practicas Preprofesionales',
                            src: '../../../assets/modules/vinculación/Formatos-Practicas Preprofesionales/ISTS-GIDIVS-05-001_ Convocatoria Practicas Preprofesionales.docx'
                        },
                    ]
                },
                {
                    id: 'pdf-container5',
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
        },
        {
            name: 'Procesos',
            type: 'list-dots',
            web_tab: false,
            files: [
                {
                    id: 'container8',
                    type: 'list',
                    name: 'Programas y Proyectos de Vinculación',
                    files: [
                        {
                            name: 'Modelo de la Gestión de Investigación, Desarrollo e Innovación y Vinculación con la sociedad',
                            type: 'text'
                        },
                        {
                            name: 'Reglamento de Vinculación con la Sociedad',
                            type: 'text'
                        },
                        {
                            name: 'Formatos',
                            type: 'text'
                        },
                        {
                            name: 'Programas de Vinculación con la Sociedad',
                            type: 'pdf',
                            files: [
                                {
                                    id: 'pdf-container6',
                                    type: 'pdf',
                                    src: ''
                                },
                            ]
                        },
                        {
                            name: 'Proyectos de Vinculación con la Sociedad',
                            type: 'list-sublist',
                            files: [
                                {
                                    id: 'list-container1',
                                    name: 'BIENESTAR ANIMAL',
                                    type: 'list',
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
                                    id: 'list-container2',
                                    name: 'ECOHUELLA',
                                    type: 'list',
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
                                    id: 'list-container3',
                                    name: 'SUPERACIÓN EMPRESARIAL: CUNA DE EMPRENDEDORES',
                                    type: 'list',
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
                                    id: 'list-container4',
                                    name: 'INNOVACIÓN Y FORMACIÓN EN TOPOGRAFÍA - INFOTOP',
                                    type: 'list',
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
                                    id: 'list-container5',
                                    name: 'INTEGRANIMAL - CUIDADO CANINO',
                                    type: 'list',
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
                                    id: 'list-container6',
                                    name: 'INTEGRANIMAL - CUIDADO CANINO',
                                    type: 'list',
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
                                    id: 'list-container7',
                                    name: 'RESPONSABILIDAD SOCIAL EMPRESARIAL Y GESTIÓN AMBIENTAL PARA EMPRENDIMIENTOS - ECOHUELLA',
                                    type: 'list',
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
                                //     id: 'list-container8',
                                //     name: 'GEOIMPACTO',
                                //     type: 'list',
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
                                    id: 'list-container9',
                                    name: 'CUENTOS QUE CONECTAN',
                                    type: 'list',
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
                                    id: 'list-container10',
                                    name: 'EMPRENDE SUPERARSE',
                                    type: 'list',
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
                    ]
                },
                {
                    id: 'container9',
                    type: 'list',
                    name: 'Proyectos de Vinculación con la Sociedad',
                    files: [
                        {
                            name: 'Disposición de Espacios institucionales',
                            type: 'info',
                            files: [
                                {
                                    field: '',
                                    type: 'text',
                                    value: 'El Instituto Superior Tecnológico Superarse promueve la integración de la comunidad poniendo a disposición de la comunidad los espacios institucionales'
                                },
                                {
                                    field: '',
                                    type: 'image',
                                    value: [
                                        '../../../assets/modules/vinculación/Disposición de Espacios institucionales.png'
                                    ]
                                },
                                {
                                    field: 'Eventos en los que ha participado ',
                                    type: 'pdf',
                                    src: ''
                                }
                            ]
                        },
                        {
                            name: 'Participación en la vida social y cultural.',
                            type: 'info',
                            files: [
                                {
                                    field: '',
                                    type: 'text',
                                    value: 'El Instituto Superior Tecnológico Superarse participa en eventos culturales, deportivos, las artes, las actividades festivas tradicionales del territorio, etc.'
                                },
                                {
                                    field: '',
                                    type: 'image',
                                    value: [
                                        '../../../assets/modules/vinculación/Participación en la vida social y cultural.png'
                                    ]
                                },
                                {
                                    field: 'Eventos en los que ha participado',
                                    type: 'pdf',
                                    src: ''
                                }
                            ]
                        },
                        {
                            name: 'Contribución al desarrollo de intereses profesionales',
                            type: 'info',
                            files: [
                                {
                                    field: '',
                                    type: 'text',
                                    value: 'El Instituto Superior Tecnológico Superarse realiza actividades y programas destinados a estudiantes de bachillerato y jóvenes egresados, brindándoles información sobre las carreras con el fin de ayudarles  a tomar decisiones informadas sobre su futuro académico y profesional.'
                                },
                                {
                                    field: '',
                                    type: 'image',
                                    value: [
                                        '../../../assets/modules/vinculación/Contribución al desarrollo de intereses profesionales 1.png',
                                        '../../../assets/modules/vinculación/Contribución al desarrollo de intereses profesionales 2.png'
                                    ]
                                },
                                {
                                    field: 'Eventos en los que ha participado',
                                    type: 'pdf',
                                    src: ''
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Prácticas Preprofesionales',
            web_tab: false,
            files: [
                {
                    id: 'pdf-container7',
                    type: 'pdf',
                    name: 'Relamento de prácticas Pre-Profesionales',
                    src: '/assets/modules/vinculación/3017_783_COD_3282_100225173133.pdf'
                },
                {
                    id: 'pdf-container8',
                    type: 'pdf',
                    name: 'Formatos',
                    src: ''
                },
            ]
        },
        {
            name: 'Relaciones Interinstitucionales',
            web_tab: false,
            files: [
                {
                    id: 'pdf-container9',
                    type: 'pdf',
                    name: 'Reglamento de Relaciones Interinstitucionales',
                    src: ''
                },
                {
                    id: 'pdf-container10',
                    type: 'pdf',
                    name: 'Formatos',
                    src: ''
                },
                {
                    id: 'container9',
                    type: 'list',
                    name: 'Instrucciones con Convenio',
                    files: [
                        {
                            id: 'pdf-container11',
                            type: 'pdf',
                            name: 'PDF',
                            src: ''
                        },
                    ]
                },
            ]
        }
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué vinculaciones están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los vinculaciones
        this.vinculaciones.forEach(vinculacion => {
            // this.expandedState[vinculación.id] = false;
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }
}
