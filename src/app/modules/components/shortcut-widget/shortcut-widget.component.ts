import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { ComponentType } from '../component.type';
import { ContactMenu } from '../../content-manager/Models/ContactMenu';

@Component({
    selector: 'vicarti-shortcut-widget',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shortcut-widget.component.html',
    styleUrl: './shortcut-widget.component.scss'
})
export class ShortcutWidgetComponent {
    @Input() contactItems: Array<ContactMenu> = [
        {
            name: 'Quito (02) 393-0980',
            type: 'tel',
            value: '023930980'
        },
        {
            name: 'matriculas@superarse.edu.ec',
            type: 'link',
            value: 'mailto:matriculas@superarse.edu.ec'
        },
        {
            name: 'BECAUSE HE IS NICE',
            type: 'link',
            value: 'https://becasuperarse.ec'
        },
        {
            name: 'Q10',
            type: 'link',
            value: 'https://superarse.q10.com'
        },
        // {
        //     name: 'Biblioteca Dra. Mery Navas',
        //     type: 'link',
        //     value: 'https://biblioteca.superarse.edu.ec/'
        // },
        {
            name: 'Teams',
            type: 'link',
            value: 'https://teams.microsoft.com/v2/'
        },
        {
            name: 'Calendarios',
            type: 'link',
            value: 'calendario'
        },
        {
            name: 'Office 365',
            type: 'link',
            value: 'https://m365.cloud.microsoft/?auth=2'
        }
    ];
    public isActive: boolean = false;
    @Input() componentRef: any;
    @Input() styles: {
        background: string,
    } = {
            background: 'bg-white',
        };
    @Output() removeComponent = new EventEmitter<any>();
    @Output() componentName: EventEmitter<ComponentType> = new EventEmitter<ComponentType>();

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

    action() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.componentName.emit('contactMenu');
        } else {
            this.componentName.emit('none');
        }
    }
    destroyComponent() {
        this.removeComponent.emit(this.componentRef);
    }
}
