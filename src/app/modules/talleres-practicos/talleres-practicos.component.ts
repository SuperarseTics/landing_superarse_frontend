import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
    selector: 'app-talleres-practicos',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
    ],
    templateUrl: './talleres-practicos.component.html',
    styleUrl: './talleres-practicos.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class TalleresPracticosComponent {
    schools = [
        {
            // id: 'pdf-container1',
            id: 'school-container1',
            name: 'Escuela de Salud',
            courses: [
                {
                    id: 'courses-school1-container1',
                    name: 'Tecnólogo en Instrumentación Quirúrgica',
                    color: '#1283C6',
                    images: []
                }
            ]
        },
        {
            id: 'school-container2',
            name: 'Escuela de Educación y Humanidades',
            courses: [
                {
                    id: 'courses-school2-container1',
                    name: 'Tecnólogo en Educación Básica',
                    color: '#FBBF2D',
                    images: []
                }
            ]
        },
        {
            id: 'school-container3',
            name: 'Escuela de Veterinaria',
            courses: [
                {
                    id: 'courses-school3-container1',
                    name: 'Tecnología Superior en Enfermería Veterinaria',
                    color: '#8DBF31',
                    images: [
                        '/assets/modules/talleres-practicos/ENFERMERIA VETERINARIA 1.png',
                        '/assets/modules/talleres-practicos/ENFERMERIA VETERINARIA 2.png'
                    ]
                },
                {
                    id: 'courses-school3-container2',
                    name: 'Tecnólogo en Producción Animal',
                    color: '#8DBF31',
                    images: []
                }
            ]
        },
        {
            id: 'school-container4',
            name: 'Escuela de Administración e Industria',
            courses: [
                {
                    id: 'courses-school4-container1',
                    name: 'Técnico Superior en Administración',
                    color: '#1283C6',
                    images: []
                },
                {
                    id: 'courses-school4-container2',
                    name: 'Técnico Superior en Marketing Digital',
                    color: '#1283C6',
                    images: []
                }
            ]
        },
        {
            id: 'school-container5',
            name: 'Escuela de Construcción y Extracción Sostenible',
            courses: [
                {
                    id: 'courses-school5-container1',
                    name: 'Tecnología Superior en Topografía',
                    color: '#EF7A15',
                    images: [
                        '/assets/modules/talleres-practicos/TOPOGRAFIA 3.png',
                        '/assets/modules/talleres-practicos/TOPOGRAFIA 2.png',
                        '/assets/modules/talleres-practicos/TOPOGRAFIA 1.png'
                    ]
                },
                {
                    id: 'courses-school5-container2',
                    name: 'Tecnólogo en Minería',
                    color: '#EF7A15',
                    images: [
                        '/assets/modules/talleres-practicos/MINEIA POST 3.jpg',
                        '/assets/modules/talleres-practicos/MINEIA POST 2.jpg',
                        '/assets/modules/talleres-practicos/MINEIA POST 1.jpg'
                    ]
                }
            ]
        },
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué aranceles están desplegados
    expandedStateCourses: { [key: string]: boolean } = {}; // Controla qué aranceles están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los aranceles
        this.schools.forEach(school => {
            this.expandedState[school.id] = false;
            school.courses.forEach(course => {
                this.expandedStateCourses[course.id] = false;

            });
        });
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
        // Colapsar los demás
        Object.keys(this.expandedState).forEach(key => {
            if (key !== id) {
                this.expandedState[key] = false;
            }
        });
    }
    toggleExpansionCourses(id: string) {
        this.expandedStateCourses[id] = !this.expandedStateCourses[id];
        // Colapsar los demás
        Object.keys(this.expandedStateCourses).forEach(key => {
            if (key !== id) {
                this.expandedStateCourses[key] = false;
            }
        });
    }
}
