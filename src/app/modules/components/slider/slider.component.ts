import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Inject, Input, OnInit, Output, signal, ViewEncapsulation } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { ComponentType } from '../component.type';
register();
@Component({
    selector: 'vicarti-slider',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class SliderComponent implements OnInit {

    @Input() componentRef: any;
    @Output() removeComponent = new EventEmitter<any>();
    @Output() componentName: EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
    public isActive: boolean = false;

    public gallery: Array<{ url: string, redirect: string, cardTitle: string, cardBigText: string, cardHashtag: string, buttonText: string, urlButton: string, isVideo: boolean }> = [
        {
            url: '../../../../assets/banners/BannerWeb (1).jpg',
            redirect: '',
            cardTitle: '',
            cardBigText: '',
            cardHashtag: '',
            buttonText: '',
            urlButton: '',
            isVideo: false
        },
        {
            url: '../../../../assets/banners/BannerWeb (2).jpg',
            redirect: '',
            cardTitle: '',
            cardBigText: '',
            cardHashtag: '',
            buttonText: '',
            urlButton: '',
            isVideo: false
        },
        {
            url: '../../../../assets/banners/BannerWeb (3).jpg',
            redirect: '',
            cardTitle: '',
            cardBigText: '',
            cardHashtag: '',
            buttonText: '',
            urlButton: '',
            isVideo: false
        },
        {
            url: '../../../../assets/banners/BannerWeb (4).jpg',
            redirect: 'https://wa.me/593995901732?text=Saludos,%20quiero%20información%20sobre%20el%20Instituto.%20Gracias',
            cardTitle: '',
            cardBigText: '',
            cardHashtag: '',
            buttonText: '',
            urlButton: '',
            isVideo: false
        },
        {
            url: '../../../../assets/banners/BannerWeb (5).jpg',
            redirect: '',
            cardTitle: '',
            cardBigText: '',
            cardHashtag: '',
            buttonText: '',
            urlButton: '',
            isVideo: false
        }
    ];

    // Configuración de Swiper
    swiperConfig = {
        autoplay: {
            delay: 3000, // Cambiar cada 3 segundos
            disableOnInteraction: false // No deshabilitar el autoplay al interactuar
        },
        loop: true, // Hacer que el slider se repita de forma infinita
        slidesPerView: 1, // Una imagen por vez
        spaceBetween: 0, // Sin espacio entre imágenes
        pagination: {
            enabled: true,
            clickable: true
        }
    };

    public swiperElement = signal<SwiperContainer | null>(null);
    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit(): void {
        // Seleccionamos el elemento del swiper-container
        const swiperElementConstructor = this.document.querySelector('swiper-container');

        // Asignamos las opciones de configuración
        const swiperOptions: SwiperOptions = {
            navigation: true,
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                // disableOnInteraction: false,
            },
            pagination: {
                enabled: true,
                clickable: true,
            }
        };

        // Aseguramos que el swiper-container existe antes de aplicar la configuración
        if (swiperElementConstructor) {
            Object.assign(swiperElementConstructor, swiperOptions); // Aplicamos las opciones al elemento
            this.swiperElement.set(swiperElementConstructor as SwiperContainer); // Guardamos la referencia al elemento
            this.swiperElement()?.initialize(); // Inicializamos el Swiper
        }
    }

    action() {
        this.isActive = !this.isActive;
        this.componentName.emit(this.isActive ? 'slider' : 'none');
    }

    destroyComponent() {
        this.removeComponent.emit(this.componentRef);
    }
}
