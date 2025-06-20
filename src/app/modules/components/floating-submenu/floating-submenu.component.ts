import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-floating-submenu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './floating-submenu.component.html',
    styleUrl: './floating-submenu.component.scss'
})
export class FloatingSubmenuComponent {

    @Input() public hardcodedMenu = [
        {
            name: 'Quiénes Somos',
            value: '',
            subItems: [
                {
                    name: "",
                    group: []
                },
                {
                    name: 'Instituto Superior Tecnológico Superarse',
                    group: [
                        {
                            name: 'Misión y Visión',
                            value: '/misionvision',
                            img: ''
                        },
                        {
                            name: 'Mensaje Rectora',
                            value: '/mensaje-rectora',
                            img: ''
                        },
                        {
                            name: 'Modelo Pedagógico',
                            value: '/modelo-pedagogico'
                        }
                    ]
                },
                {
                    name: 'Estructura',
                    group: [
                        {
                            name: 'Organigrama',
                            value: '/organigrama',
                            img: ''
                        },
                        {
                            name: 'Autoridades',
                            value: '/autoridades',
                            img: ''
                        },
                        {
                            name: 'Estatuto',
                            value: '/estatuto',
                            img: ''
                        },
                        {
                            name: 'Aseguramiento de la Calidad y Planificación ',
                            value: '/aseguramiento-de-la-calidad'
                        }
                    ]
                },
                {
                    name: 'Gaceta',
                    group: [
                        {
                            name: 'Código',
                            value: '/codigos',
                            img: ''
                        },
                        {
                            name: 'Modelos',
                            value: '/modelos',
                            img: ''
                        },
                        {
                            name: 'Reglamentos',
                            value: '/reglamento',
                            img: ''
                        },
                        {
                            name: 'Normativa',
                            value: '/normativa',
                            img: ''
                        },
                        {
                            name: 'Protocolo',
                            value: '/protocolo',
                            img: ''
                        }
                    ]
                },
            ]
        },
        {
            name: 'Oferta Académica',
            value: '',
            subItems: [
                {
                    name: "",
                    group: []
                },
                {
                    name: 'Información',
                    group: [
                        {
                            name: 'Proceso de Admisión',
                            value: '/proceso-adminision',
                            img: ''
                        }
                    ]
                },
                {
                    name: 'Escuelas',
                    group: [
                        {
                            name: 'Escuela de Salud',
                            value: '/escuela-salud',
                            img: ''
                        },
                        {
                            name: 'Escuela de Educación y Humanidades',
                            value: '/escuela-educacion-humanidades',
                            img: ''
                        },
                        {
                            name: 'Escuela de Veterinaria',
                            value: '/escuela-veterinaria',
                            img: ''
                        },
                        {
                            name: 'Escuela de Administración e Industria',
                            value: '/escuela-administracion-industria',
                            img: ''
                        },
                        {
                            name: 'Escuela de Construcción y Extracción Sostenible',
                            value: '/escuela-construccion-extraccion',
                            img: ''
                        }
                    ]
                },
            ]
        },
        {
            name: 'Porque Elegirnos',
            value: '',
            subItems: [
                {
                    name: "",
                    group: []
                },
                {
                    name: 'Información',
                    group: [
                        {
                            name: 'Porque Elegirnos',
                            value: '/elegirnos',
                            img: ''
                        }
                    ]
                }
            ]
        },
        {
            name: 'Talento Humano',
            value: '',
            subItems: [
                {
                    name: "",
                    group: []
                },
                {
                    name: "Información",
                    group: [
                        {
                            name: 'Plan de Igualdad',
                            value: '/plan-igualdad',
                            img: ''
                        },
                        {
                            name: 'Seguridad y Salud Ocupacional',
                            value: 'salud-ocupacional',
                            img: ''
                        },
                    ]
                },
                {
                    name: 'Talento Humano',
                    group: [
                        {
                            name: 'Trabaja con nosotros',
                            value: '/trabaja-con-nosotros',
                            img: ''
                        },
                        {
                            name: 'Concurso de Méritos y Oposición para Profesores Titulares',
                            value: '/profesores-titulares',
                            img: ''
                        },
                        {
                            name: 'Proceso de Selección para Profesores No Titulares',
                            value: '/seleccion-no-titulares',
                            img: ''
                        },
                        {
                            name: 'Evaluación Docente',
                            value: '/evaluacion-docente',
                            img: ''
                        },
                        {
                            name: 'Mejores Evaluados',
                            value: '/mejores-evaluados',
                            img: ''
                        }
                    ]
                }
            ]
        },
        {
            name: 'Vinculación',
            value: '',
            subItems: [
                {
                    name: "",
                    group: []
                },
                {
                    name: "Proceso de Vinculación",
                    group: [
                        {
                            name: 'Mensaje',
                            value: '/vinculacion-mensaje',
                            img: ''
                        },
                        {
                            name: 'Modelo de IDI y VS',
                            value: '/modelo-idi-vs',
                            img: ''
                        },
                        {
                            name: 'Equipo de trabajo',
                            value: '/equipo-trabajo',
                            img: ''
                        }
                    ]
                },
                {
                    name: 'Procesos',
                    group: [
                        {
                            name: 'Programas y Proyectos de Vinculación',
                            value: '/programa-proyectos-vinculacion',
                            img: ''
                        },
                        {
                            name: 'Prácticas Preprofesionales',
                            value: '/practicas-preprofesionales',
                            img: ''
                        },
                        {
                            name: 'Relaciones Interinstitucionales',
                            value: '/relaciones-interinstitucionales',
                            img: ''
                        },
                        {
                            name: 'Presencia en la Comunidad',
                            value: '/presencia-comunidad',
                            img: ''
                        }
                    ]
                }
            ]
        },
        {
            name: 'Investigación',
            value: '',
            subItems: [
                {
                    name: "Investigación, Desarrollo e Innovación",
                    group: [
                        {
                            name: 'Quienes Somos',
                            value: '/investigacion-quienes-somos',
                            img: ''
                        },
                        {
                            name: 'Modelo de Investigación y Vinculación',
                            value: '/investigacion-modelo-i-v',
                            img: ''
                        },
                        {
                            name: 'Normativa de Investigación',
                            value: '/investigacion-normativa',
                            img: ''
                        }
                    ]
                },
                {
                    name: "Procesos de Investigación",
                    group: [
                        {
                            name: 'Dominios académicos y Líneas de Investigación Institucionales',
                            value: '/investigacion-dominios-linea',
                            img: ''
                        },
                        {
                            name: 'Proyectos de Investigación e Innovación en el Tecnológico Superarse',
                            value: '/investigacion-proyectos-innovacion',
                            img: ''
                        },
                        {
                            name: 'Redes Académicas y Científicas de I+D',
                            value: '/investigacion-redes-cientificas',
                            img: ''
                        }
                    ]
                },
                {
                    name: "Eventos",
                    group: [
                        {
                            name: 'Congreso de Topografía 2023',
                            value: '/investigacion-eventos-congreso-2023',
                            img: ''
                        },
                        {
                            name: 'Seminario Equino',
                            value: '/investigacion-eventos-seminario-equino',
                            img: ''
                        },
                        {
                            name: 'Simposio de Administración',
                            value: '/investigacion-eventos-simposio-administracion',
                            img: ''
                        }
                    ]
                },
                {
                    name: "Convocatorias",
                    group: [
                        {
                            name: 'Planificación Gestión de Investigación PAO mayo - octubre 2025',
                            value: './assets/modules/investigación/convocatorias/PLANIFICACION GESTION DE INVESTIGACION_PAO_may_oct_2025.pdf',
                            img: ''
                        },
                        {
                            name: 'Proyectos de Investigación PAO mayo - octubre 2025',
                            value: '/investigacion-convocatorias',
                            img: ''
                        }
                    ]
                },
                {
                    name: "Publicaciones",
                    group: [
                        {
                            name: 'Mayo - Octubre 2024',
                            value: '/investigacion-publicaciones-may-oct-2024',
                            img: ''
                        },
                        {
                            name: 'Noviembre 2023 - Abril 2024',
                            value: '/investigacion-publicaciones-nov2023-abr2024',
                            img: ''
                        },
                        {
                            name: 'Mayo - Octubre 2023',
                            value: '/investigacion-publicaciones-may-oct-2023',
                            img: ''
                        },
                        {
                            name: 'Noviembre 2022 - Abril 2023',
                            value: '/investigacion-publicaciones-nov2022-abr2023',
                            img: ''
                        },
                    ]
                }
            ]
        },
        {
            name: 'Biblioteca',
            value: '',
            subItems: [
                {
                    name: "",
                    group: []
                },
                {
                    name: "Biblioteca",
                    group: [
                        {
                            name: 'ELibro',
                            value: 'https://elibro.net/es/lc/superarse/inicio/',
                            img: ''
                        },
                        {
                            name: 'Biblioteca Dra. Mery Navas',
                            value: 'https://biblioteca.superarse.edu.ec',
                            img: ''
                        }
                    ]
                }
            ]
        },
        {
            name: 'Bienestar Institucional',
            value: '',
            subItems: [
                {
                    name: "",
                    group: []
                },
                {
                    name: "Información",
                    group: [
                        {
                            name: 'Bienestar Institucional',
                            value: 'bienestar-institucional',
                            img: ''
                        }
                    ]
                },
                {
                    name: "Transparencia",
                    group: [
                        {
                            name: 'Estado Financiero',
                            value: 'estado-financiero',
                            img: '/assets/submenu/Estado Financiero.jpg'
                        },
                        {
                            name: 'Rendición de Cuentas',
                            value: '/rendicion-cuentas',
                            img: '/assets/submenu/Rendición de Cuentas.jpg'
                        },
                        {
                            name: 'Remuneración Mensual',
                            value: '/remuneracion-mensual',
                            img: '/assets/submenu/Remuneración Mensual.jpg'
                        },
                        {
                            name: 'Aranceles',
                            value: '/aranceles',
                            img: '/assets/submenu/Aranceles.jpg'
                        },
                        {
                            name: 'Balance General',
                            value: '/balance-general',
                            img: '/assets/submenu/Balance General.jpg'
                        },
                        {
                            name: 'Cumplimiento Tributario',
                            value: '/cumpliento-tributario',
                            img: '/assets/submenu/Cumplimiento Tributario.jpg'
                        },
                        {
                            name: 'Planificación PEDI',
                            value: '/pedi',
                            img: '/assets/submenu/Planificación PEDI.jpg'
                        },
                        {
                            name: 'Balances Auditados',
                            value: '/balances-auditados',
                            img: '/assets/submenu/Balances Auditados.jpg'
                        },
                    ]
                }
            ]
        }
    ];
    @Input() public submenu: string = '';
    transparenciaItems = [];

    ngOnInit() {
        this.transparenciaItems = this.getTransparenciaItems().group;
    }

    getTransparenciaItems(): any | undefined {
        return this.hardcodedMenu
            .flatMap(menu => menu.subItems)
            .find(subItem => subItem.name === this.submenu);
    }

}
