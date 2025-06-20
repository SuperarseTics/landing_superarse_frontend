import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { ComponentType } from '../component.type';
import { MainMenu } from '../../content-manager/Models/MainMenu';

@Component({
    selector: 'vicarti-menu-widget',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu-widget.component.html',
    styleUrl: './menu-widget.component.scss'
})
export class MenuWidgetComponent implements AfterViewInit {
    // @Input() menuLogo:string = 'assets/image.png';
    @Input() menuLogo: string = 'assets/superarse_gris.png';
    @Input() componentRef: any;
    @Output() removeComponent = new EventEmitter<any>();
    @Output() componentName: EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
    public isActive: boolean = false;
    @Input() public hardcodedMenu: Array<MainMenu> = [
        {
            name: 'Quiénes Somos',
            value: '',
            subItems: [
                {
                    name: 'Instituto Superior Tecnológico Superarse',
                    group: [
                        {
                            name: 'Misión y Visión',
                            value: '/misionvision'
                        },
                        // {
                        //   name: 'Valores',
                        //   value: '/valores'
                        // },
                        {
                            name: 'Mensaje Rectora',
                            value: '/mensaje-rectora'
                        },
                        {
                            name: 'Modelo Educativo',
                            value: '/modelo-educativo'
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
                            value: '/organigrama'
                        },
                        {
                            name: 'Autoridades',
                            value: '/autoridades'
                        },
                        {
                            name: 'Estatuto',
                            value: '/estatuto'
                        },
                        {
                            name: 'Aseguramiento de la Calidad y Planificación ',
                            value: '/aseguramiento-de-la-calidad'
                        }
                    ]
                },
                {
                    name: "Transparencia",
                    group: [
                        {
                            name: 'Estado Financiero',
                            value: 'estado-financiero'
                        },
                        {
                            name: 'Rendición de Cuentas',
                            value: '/rendicion-cuentas'
                        },
                        {
                            name: 'Remuneración Mensual',
                            value: '/remuneracion-mensual'
                        },
                        {
                            name: 'Aranceles',
                            value: '/aranceles'
                        },
                        {
                            name: 'Balance General',
                            value: '/balance-general'
                        },
                        {
                            name: 'Cumplimiento Tributario',
                            value: '/cumpliento-tributario'
                        },
                        {
                            name: 'Planificación PEDI',
                            value: '/pedi'
                        },
                        {
                            name: 'Balances Auditados',
                            value: '/balances-auditados'
                        },
                    ]
                },
                {
                    name: 'Gaceta',
                    group: [
                        {
                            name: 'Código',
                            value: '/codigos'
                        },
                        {
                            name: 'Modelos',
                            value: '/modelos'
                        },
                        {
                            name: 'Reglamentos',
                            value: '/reglamento'
                        },
                        {
                            name: 'Normativa',
                            value: '/normativa'
                        },
                        {
                            name: 'Protocolo',
                            value: '/protocolo'
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
                            value: '/proceso-adminision'
                        }
                    ]
                },
                {
                    name: 'Escuelas',
                    group: [
                        {
                            name: 'Escuela de Salud',
                            value: '/escuela/Salud'
                        },
                        {
                            name: 'Escuela de Educación y Humanidades',
                            value: '/escuela/Educación y Humanidades'
                        },
                        {
                            name: 'Escuela de Veterinaria',
                            value: '/escuela/Veterinaria'
                        },
                        {
                            name: 'Escuela de Administración e Industria',
                            value: '/escuela/Administración e Industria'
                        },
                        {
                            name: 'Escuela de Construcción y Extracción Sostenible',
                            value: '/escuela/Construcción y Extracción Sostenible'
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
                            value: '/elegirnos'
                        },
                        // {
                        //     name: 'Proceso de Admisión',
                        //     value: '/proceso-adminision'
                        // }
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
                            value: '/plan-igualdad'
                        },
                        {
                            name: 'Seguridad y Salud Ocupacional',
                            value: 'salud-ocupacional'
                        },
                    ]
                },
                {
                    name: 'Talento Humano',
                    group: [
                        {
                            name: 'Trabaja con nosotros',
                            value: '/trabaja-con-nosotros'
                        },
                        // {
                        //     name: 'Postulación',
                        //     value: '/postulacion'
                        // },
                        {
                            name: 'Concurso de Méritos y Oposición para Profesores Titulares',
                            value: '/profesores-titulares'
                        },
                        {
                            name: 'Proceso de Selección para Profesores No Titulares',
                            value: '/seleccion-no-titulares'
                        },
                        {
                            name: 'Evaluación Docente',
                            value: '/evaluacion-docente'
                        },
                        {
                            name: 'Mejores Evaluados',
                            value: '/mejores-evaluados'
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
                            value: '/vinculacion-mensaje'
                        },
                        {
                            name: 'Modelo de IDI y VS',
                            value: '/modelo-idi-vs'
                        },
                        {
                            name: 'Equipo de trabajo',
                            value: '/equipo-trabajo'
                        }
                    ]
                },
                {
                    name: 'Procesos',
                    group: [
                        {
                            name: 'Programas y Proyectos de Vinculación',
                            value: '/programa-proyectos-vinculacion'
                        },
                        {
                            name: 'Prácticas Preprofesionales',
                            value: '/practicas-preprofesionales'
                        },
                        {
                            name: 'Relaciones Interinstitucionales',
                            value: '/relaciones-interinstitucionales'
                        },
                        {
                            name: 'Presencia en la Comunidad',
                            value: '/presencia-comunidad'
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
                            value: '/investigacion-quienes-somos'
                        },
                        {
                            name: 'Modelo de Investigación y Vinculación',
                            value: '/investigacion-modelo-i-v'
                        },
                        {
                            name: 'Normativa',
                            value: '/investigacion-reglamento'
                        }
                    ]
                },
                {
                    name: "Procesos de Investigación",
                    group: [
                        {
                            name: 'Dominios académicos y Líneas de Investigación Institucionales',
                            value: '/investigacion-dominios-linea'
                        },
                        {
                            name: 'Proyectos de Investigación e Innovación en el Tecnológico Superarse',
                            value: '/investigacion-proyectos-innovacion'
                        },
                        {
                            name: 'Redes Académicas y Científicas de I+D',
                            value: '/investigacion-redes-cientificas'
                        }
                    ]
                },
                {
                    name: "Eventos",
                    group: [
                        {
                            name: 'Congreso de Topografía 2023',
                            value: '/investigacion-eventos-congreso-2023'
                        },
                        {
                            name: 'Seminario Equino',
                            value: '/investigacion-eventos-seminario-equino'
                        },
                        {
                            name: 'Simposio de Administración',
                            value: '/investigacion-eventos-simposio-administracion'
                        }
                    ]
                },
                {
                    name: "Convocatorias",
                    group: [
                        {
                            name: 'Planificación Gestión de Investigación PAO mayo - octubre 2025',
                            value: '/assets/modules/investigación/convocatorias/PLANIFICACION GESTION DE INVESTIGACION_PAO_may_oct_2025.pdf'
                        },
                        {
                            name: 'Proyectos de Investigación PAO mayo - octubre 2025',
                            value: '/investigacion-convocatorias'
                        }
                    ]
                },
                {
                    name: "Publicaciones",
                    group: [
                        {
                            name: 'Mayo - Octubre 2024',
                            value: '/investigacion-publicaciones-may-oct-2024'
                        },
                        {
                            name: 'Noviembre 2023 - Abril 2024',
                            value: '/investigacion-publicaciones-nov2023-abr2024'
                        },
                        {
                            name: 'Mayo - Octubre 2023',
                            value: '/investigacion-publicaciones-may-oct-2023'
                        },
                        {
                            name: 'Noviembre 2022 - Abril 2023',
                            value: '/investigacion-publicaciones-nov2022-abr2023'
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
                            value: 'biblioteca-virtual-e-libro'
                        },
                        {
                            name: 'Biblioteca Dra. Mery Navas',
                            value: 'biblioteca-dra-mery-navas'
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
                            value: 'bienestar-institucional'
                        },
                        {
                            name: 'Botón de ayuda',
                            value: 'bi-denuncia'
                        },
                        {
                            name: 'Propuesta Pedagógica',
                            value: 'bi-propuesta-pedagogica'
                        }
                    ]
                }
            ]
        }
    ];

    screenWidth: number = window.innerWidth;
    isMenuOpen: boolean = false;
    isSubMenuOpen: boolean[] = [];

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateScreenWidth();
    }

    updateScreenWidth() {
        this.screenWidth = window.innerWidth;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    toggleSubMenu(index: number) {
        // Cierra todos los submenús antes de abrir el seleccionado
        this.isSubMenuOpen[index] = !this.isSubMenuOpen[index];
        this.isSubMenuOpen = this.isSubMenuOpen.map((_, i) => {
            return i === index ? this.isSubMenuOpen[index] : false;
        });
    }

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.updateScreenWidth();
    }

    ngAfterViewInit(): void {

    }
    action() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.componentName.emit('mainMenu');
        } else {
            this.componentName.emit('none');
        }
    }
    destroyComponent() {
        this.removeComponent.emit(this.componentRef);
    }
}
