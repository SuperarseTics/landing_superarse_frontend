import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { ComponentType } from '../component.type';
import { FooterItems } from '../../content-manager/Models/FooterItems';
@Component({
    selector: 'vicarti-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    @Input('footerItems') footerItems: Array<FooterItems> = [
        {
            name: 'Contacto',
            group: [
                {
                    name: 'SANGOLQUI',
                    address: 'Av. General Rumiñahui e Isla Pinta 1111',
                    phone: '(02) 393-0980',
                    whatsapp: '',
                    email: '',
                    url: '',
                    icon: '',
                },
            ]
        },
        {
            name: 'Admisiones',
            group: [
                {
                    name: 'Admisiones',
                    address: '',
                    phone: '',
                    whatsapp: '593995901732',
                    email: 'matriculas@superarse.edu.ec',
                    url: '',
                    icon: ''
                }
            ]
        },
        {
            name: 'Links',
            group: [
                {
                    name: 'Noticias',
                    address: '',
                    phone: '',
                    whatsapp: '',
                    email: '',
                    url: '',
                    icon: 'pi-file'
                },
                {
                    name: 'Biblioteca',
                    address: '',
                    phone: '',
                    whatsapp: '',
                    email: '',
                    url: 'https://biblioteca.superarse.edu.ec/',
                    icon: 'pi-book'
                },
                {
                    name: 'Calendarios',
                    address: '',
                    phone: '',
                    whatsapp: '',
                    email: '',
                    url: 'calendario',
                    icon: 'pi-calendar'
                }
            ]
        },
    ];
    @Input() footerLogo: string = 'assets/Logo-Superarse-Negativo.png';
    @Input() componentRef: any;
    @Output() removeComponent = new EventEmitter<any>();
    @Output() componentName: EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
    public isActive: boolean = false;

    action() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.componentName.emit('footer');
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
