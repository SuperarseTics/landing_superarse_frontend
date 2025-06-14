/*import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../../reglamento/pipes.module';
import { WhatsappComponent } from "../../../components/whatsapp/whatsapp.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-no-titulares',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './seleccion-no-titulares.component.html',
  styleUrl: './seleccion-no-titulares.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SeleccionNoTitularesComponent implements OnInit {

    constructor(private router: Router) { }

    data1 = [
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
    data2 = [
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
    data3 = [
        {
            title : 'Requisitos',
            type: 'multiple',
            files : [
                {
                    title: 'Escuela de Educación y Humanidades',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ReclutamientoPersonalEducació_Humanidades.pdf'
                },
                {
                    title: 'Escuela de construcción y extracción sostenible',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ReclutamientoPersonalEscuelaConstrucción.pdf'
                },
                {
                    title: 'Escuela de Veterinaria',
                    type: 'pdf',
                    src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ReclutamientoPersonalEscuelaVeterinaria.pdf'
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
    title = 'Proceso de Selección para Profesores No Titulares';
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
}*/

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../../reglamento/pipes.module';
import { WhatsappComponent } from "../../../components/whatsapp/whatsapp.component";
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-seleccion-no-titulares',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './seleccion-no-titulares.component.html',
  styleUrls: ['./seleccion-no-titulares.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeleccionNoTitularesComponent implements OnInit {

  selectedPdfSrc: SafeResourceUrl | null = null;
  selectedPdfTitle: string = '';
  /*selectedPdfTitle: string = '';
selectedPdfSrc: any = '';

mostrarPdf(title: string, src: string) {
  this.selectedPdfTitle = title;
  this.selectedPdfSrc = src;
}

cerrarVisor() {
  this.selectedPdfSrc = '';
  this.selectedPdfTitle = '';
}*/

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  data1 = [
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

  data2 = [
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

  data3 = [
    {
      title : 'Requisitos',
      type: 'multiple',
      files : [
        {
          title: 'Escuela de Educación y Humanidades',
          type: 'pdf',
          src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ReclutamientoPersonalEducació_Humanidades.pdf'
        },
        {
          title: 'Escuela de construcción y extracción sostenible',
          type: 'pdf',
          src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ReclutamientoPersonalEscuelaConstrucción.pdf'
        },
        {
          title: 'Escuela de Veterinaria',
          type: 'pdf',
          src: '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ReclutamientoPersonalEscuelaVeterinaria.pdf'
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

  ngOnInit() {
    // PDF que se mostrará automáticamente al entrar al módulo
    this.selectedPdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      '../../../../assets/modules/talento-humano/postulacion/profesores-no-titulares/Proceso de Selección para Profesores no Titulares/ReclutamientoPersonalEducació_Humanidades.pdf'
    );
    this.selectedPdfTitle = 'Escuela de Educación y Humanidades';
   }

  mostrarPdf(title: string, src: string) {
    this.selectedPdfTitle = title;
    this.selectedPdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  cerrarVisor() {
    this.selectedPdfSrc = null;
    this.selectedPdfTitle = '';
  }

  redirigir(route: string, title: string, src: string, type: string) {
    this.router.navigate([`${route}`], {
      state: {
        title,
        src,
        type
      }
    });
  }
}

