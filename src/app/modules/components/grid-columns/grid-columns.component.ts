import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { ComponentType } from '../component.type';

@Component({
    selector: 'vicarti-grid-columns',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './grid-columns.component.html',
    styleUrl: './grid-columns.component.scss'
})
export class GridColumnsComponent {
    @Input('isCounter') public isCounter: boolean = false;
    @Input() componentRef: any;
    @Output() removeComponent = new EventEmitter<any>();
    @Output() componentName: EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
    public isActive: boolean = false;
    public listItems: Array<{ iconUrl: string, label: string, labelUrl: string }> = [
        {
            iconUrl: 'assets/personas.png',
            label: 'Vinculación con la sociedad',
            labelUrl: 'vinculacion'
        },
        {
            iconUrl: 'assets/investigacion.png',
            label: 'Investigación',
            labelUrl: 'investigacion'
        },
        {
            iconUrl: 'assets/graduacion.png',
            label: 'Titulación',
            labelUrl: 'titulacion'
        },
        {
            iconUrl: 'assets/gestion-del-talento.png',
            label: 'Talento Humano',
            labelUrl: 'talento-humano'
        },
        {
            iconUrl: 'assets/bienestar.png',
            label: 'Bienestar Institucional',
            labelUrl: 'bienestar-institucional'
        },
        {
            iconUrl: 'assets/talleres-de-trabajo.png',
            label: 'Talleres Prácticos',
            labelUrl: 'talleres-practicos'
        },
        {
            iconUrl: 'assets/calendario.png',
            label: 'Calendarios',
            labelUrl: 'calendario'
        }
    ];

    public counterItems: Array<{ id: number, label: string, value: number }> = [
        {
            id: 1,
            label: 'Años',
            value: 6
        },
        {
            id: 2,
            label: 'Carreras tecnológicas',
            value: 11
        },
        {
            id: 3,
            label: 'Graduados',
            value: 497
        },
        {
            id: 4,
            label: 'Estudiantes',
            value: 630
        }
    ];
    action() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.componentName.emit('gridColumns');
        } else {
            this.componentName.emit('none');
        }
    }
    destroyComponent() {
        this.removeComponent.emit(this.componentRef);
    }

    screenWidth: number = window.innerWidth;
    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateScreenWidth();
    }
    updateScreenWidth() {
        this.screenWidth = window.innerWidth;
    }

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.updateScreenWidth();
    }
}
