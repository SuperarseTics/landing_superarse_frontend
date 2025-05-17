import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { WhatsappComponent } from '../components/whatsapp/whatsapp.component';
import { ShortcutWidgetComponent } from '../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../components/menu-widget/menu-widget.component';
import { CardsComponent } from '../components/cards/cards.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-escuelas',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        WhatsappComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        CardsComponent
    ],
    templateUrl: './escuelas.component.html',
    styleUrl: './escuelas.component.scss'
})
export class EscuelasComponent implements OnInit {

    title: string | null = null;
    color = {
        'Salud': ['#1283C6'],
        'Educación y Humanidades': ['#FBBF2D'],
        'Veterinaria': ['#8DBF31'],
        'Administración e Industria': ['#1283C6'],
        'Construcción y Extracción Sostenible': ['#EF7A15'],
    };
    data: Record<string, { name: string; img: string, src: string, color: string }[]> = {
        'Salud': [
            {
                name: 'Tecnólogo en Instrumentación Quirúrgica',
                img: '/assets/modules/escuela-salud/PORTADA.png',
                src: '/escuela-salud/Salud',
                color: '#1283C6'
            }
        ],
        'Educación y Humanidades': [
            {
                name: 'Tecnólogo en Educación Básica',
                img: '/assets/modules/escuela-educacion-humanidades/PORTADA1.png',
                src: '/escuela-educacion-humanidades/Educacion-Basica',
                color: '#FBBF2D'
            }
        ],
        'Veterinaria': [
            {
                name: 'Tecnología Superior en Enfermería Veterinaria',
                img: '/assets/modules/escuela-veterinaria/PORTADA ENFERMERIA.png',
                src: '/escuela-veterinaria/Enfermeria',
                color: '#8DBF31'
            },
            {
                name: 'Tecnólogo en Producción Animal',
                img: 'assets/modules/escuela-veterinaria/PORTADA PRODUCCION ANIMAL.png',
                src: '/escuela-veterinaria/Produccion-Animal',
                color: '#8DBF31'
            }
        ],
        'Administración e Industria': [
            {
                name: 'Técnico Superior en Marketing Digital',
                img: 'assets/modules/escuela-administracion-industria/PORTADA MARKETING.png',
                src: '/escuela-administracion-industria/Marketing',
                color: '#1283C6'
            },
            {
                name: 'Seguridad e Higiene del Trabajo',
                img: '/assets/modules/escuela-administracion-industria/PORTADA SEGURIDAD E HIGIENE DEL TRABAJO.png',
                src: '/escuela-administracion-industria/SeguridadHigieneTrabajo',
                color: '#1283C6'
            },
            {
                name: 'Seguridad y Prevención de Riesgos Laborales',
                img: '/assets/modules/escuela-administracion-industria/PORTADA SEGURIDAD Y PREVENCIÓN DE RIESGOS LABORALES.png',
                src: '/escuela-administracion-industria/SeguridadPrevencionRiesgosLaborales',
                color: '#1283C6'
            },
            {
                name: 'Técnico Superior en Administración',
                img: 'assets/modules/escuela-administracion-industria/PORTADA ADMINSTRACION.png',
                src: '/escuela-administracion-industria/Administracion',
                color: '#1283C6'
            },
        ],
        'Construcción y Extracción Sostenible': [
            {
                name: 'Tecnología Superior en Topografía',
                img: 'assets/modules/escuela-construccion-extraccion/PORTADA TOPOGRAFIA.png',
                src: '/escuela-construccion-extraccion/Topografia',
                color: '#EF7A15'
            },
            {
                name: 'Tecnólogo en Minería',
                img: 'assets/modules/escuela-construccion-extraccion/PORTADA MINERIA.png',
                src: '/escuela-construccion-extraccion/Mineria',
                color: '#EF7A15'
            }
        ],
    };


    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get('title') ?? '';
        this.title = history.state.title ?? this.title;
    }

}
