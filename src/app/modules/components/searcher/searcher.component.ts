import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentType } from '../component.type';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'vicarti-searcher',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './searcher.component.html',
    styleUrl: './searcher.component.scss'
})
export class SearcherComponent {
    @Input() componentRef: any;
    @Output() removeComponent = new EventEmitter<any>();
    @Output() componentName: EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
    public isActive: boolean = false;
    //   constructor(){}

    busqueda: string = '';
    mostrarOpciones: boolean = false;
    opcionesFiltradas = [];

    opciones = [
        {
            id: 1,
            nombre: 'Escuela de Salud',
            src: '/escuela-salud'
        },
        {
            id: 2,
            nombre: 'Escuela de Educación y Humanidades',
            src: '/escuela-educacion-humanidades'
        },
        {
            id: 3,
            nombre: 'Escuela de Veterinaria',
            src: '/escuela-veterinaria'
        },
        {
            id: 4,
            nombre: 'Escuela de Administración e Industria',
            src: '/escuela-administracion-industria'
        },
        {
            id: 5,
            nombre: 'Escuela de Construcción y Extracción Sostenible',
            src: '/escuela-construccion-extraccion'
        }
    ];

    constructor(private router: Router) {
        this.opcionesFiltradas = [...this.opciones]; // Cargar opciones al inicio
    }

    filtrarOpciones() {
        this.opcionesFiltradas = this.opciones.filter(opcion =>
            opcion.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        );
        this.mostrarOpciones = true; // Mostrar siempre que haya búsqueda
    }

    seleccionarOpcion(opcion: any) {
        this.busqueda = opcion.src;
        this.mostrarOpciones = false; // Cierra la lista después de seleccionar
        this.ejecutarFuncion();
    }

    ocultarOpcionesConRetraso() {
        setTimeout(() => this.mostrarOpciones = false, 200); // Pequeño delay para evitar cierre inmediato
    }

    ejecutarFuncion() {
        if (this.busqueda.startsWith("/")) {
            this.router.navigate([`${this.busqueda}`]);
        }
    }

    destroyComponent() {
        this.removeComponent.emit(this.componentRef);
    }
    action() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.componentName.emit('searcher');
        } else {
            this.componentName.emit('none');
        }
    }
}
