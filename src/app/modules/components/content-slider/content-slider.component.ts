import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, HostListener, Inject, Input, OnInit, Output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
// import function to register Swiper custom elements
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import * as moment from 'moment';
import { ComponentType } from '../component.type';
register();
@Component({
    selector: 'vicarti-content-slider',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './content-slider.component.html',
    styleUrl: './content-slider.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ContentSliderComponent implements AfterViewInit {
    @Input() componentRef: any;
    @Output() removeComponent = new EventEmitter<any>();
    @Output() componentName: EventEmitter<ComponentType> = new EventEmitter<ComponentType>();
    public isActive: boolean = false;
    @Input('isNewsSlider') public isNewSlider: boolean = true;
    @Input('sliderHeader') public sliderHeader: string = '';
    @Input('elementId') public elementId: string = 'newsSwiper';
    @Input('hasPagination') public hasPagination: boolean = true;
    @Input('hasGrayBackground') public hasGrayBackground: boolean = false;
    public news: Array<{ imgUrl: string, title: string, resume: string, date: string, urlNews: string, }> = [
        {
            imgUrl: '',
            title: 'MARKETING DIGITAL',
            resume: 'Lo que más me gusta del Instituto, es que puedo organizarme de mejor manera, según mi tiempo, estudiar en el momento en que  yo quiera, y seguir con todas mis actividades diarias. Me encanta porque todo lo que estoy aprendiendo en la Carrera lo hago conjunto con la práctica, lo que me ha permitido desarrollarme y participar en un proyecto de vinculación con la sociedad.',
            date: 'Kristhel Rosero',
            urlNews: ''
        },
        {
            imgUrl: '',
            title: 'CUIDADO CANINO',
            resume: 'Estoy super contento de haber elegido al ISTS para hacer mi Carrera en Cuidado Canino, ya que cuento con el apoyo de los profesores y de la institución, nunca en mi vida imagine tener la oportunidad tan grande como hacer mis prácticas pre-profesionales en el tercer semestre de estudio en una de las clínicas que el Instituto tiene convenio. Estoy convencido de emprender por la motivación y de las herramientas que me brinda mi Carrera.',
            date: 'Andrés Cárdenas',
            urlNews: ''
        },
        {
            imgUrl: '',
            title: 'MARKETING DIGITAL',
            resume: 'La Carrera de Tecnología en Cuidado Canino me motivó a: Planificar, diseñar y controlar instalaciones de manejo canino en general, etología, sanidad, nutrición, ética, y estética para lograr crear los mejores ambientes. Además, de conocer el funcionamiento del cuerpo del animal, y la atención al paciente y seguir órdenes de un médico veterinario capacitado y estoy continuando con mi último semestre de la Carrera con alegría y con muchas ganas.',
            date: 'Bryan Tapia',
            urlNews: ''
        },
        {
            imgUrl: '',
            title: 'ASISTENCIA PEDAGÓGICA',
            resume: 'La Carrera de Asistencia Pedagógica me ha permitido aprender sobre las pedagogías actuales e innovadoras, las cuales me han ayudado a conocer las distintas formas de apoyo que se puede brindar en casos de Necesidades Educativas Específicas (NEE), así como también con actividades lúdicas para la estimulación temprana; para completar con mi formación al titularme como Tecnólogo, el ISTS me ofrece cursos de profesionalización en beneficio a mi Carrera y finalmente la modalidad híbrida me ha permitido estudiar y trabajar de una manera más organizada.',
            date: 'Carlos Ávila Andrade',
            urlNews: ''
        },
        {
            imgUrl: '',
            title: 'TOPOGRAFÍA',
            resume: 'Desde hace mucho tiempo atrás he buscado un Instituto que me permita estudiar la Carrera de Topografía y trabajar a la vez. El ISTS me ha permitido desarrollarme como profesional, he aprendido a mejorar mi técnica de trabajo y eso me ha traído grandes recompensas en el ámbito laboral, pues actualmente laboro en el proyecto más grande de minería del Ecuador; “MIRADOR” como Coordinador de Topografía.&nbsp; Estoy muy agradecido con el Instituto y espero pronto tener el título de profesional tan anhelado.',
            date: 'David Serrano S.',
            urlNews: ''
        },
        {
            imgUrl: '',
            title: 'ASISTENCIA PEDAGÓGICA',
            resume: 'Me siento muy contenta de pertenecer al ISTS ya que en la Carrera de Asistencia Pedagógica me ha permitido obtener estrategias y conocimientos sobre las pedagogías alternativas e innovadoras, como también desarrollar competencias profesionales en el ámbito educativo. Gracias a los convenios que nos ofrece el Instituto he podido realizar mis prácticas preprofesionales y obtener un puesto de trabajo en lo que más me gusta.',
            date: 'Andrea López',
            urlNews: ''
        },
        {
            imgUrl: '',
            title: 'PRODUCCIÓN ANIMAL',
            resume: 'Me encuentro cursando mi última año y durante el transcurso de mis estudios he logrado instruirme profesionalmente a detalle sobre la crianza, manejo, producción, funcionamiento y faenamiento de varias especies de animales. Mi pasión y amor por los animales ha sido un factor determinante, pues en las prácticas que el ISTS nos brinda la facilidad de realizar es fundamental aplicar todos los conocimientos teóricos y así conocer cada uno de los detalles que caracterizan a las distintas especies. El objetivo como profesional es poder llegar a mejora de la productividad y eficiencia del sector pecuario del Ecuador.',
            date: 'Daniela Mosquera',
            urlNews: ''
        },
        {
            imgUrl: '',
            title: 'ADMINISTRACIÓN',
            resume: 'Para mí es un privilegio formarme como profesional en el ISTS, ya que el personal docente es totalmente calificado y lo más importante su metodología es excelente, lo que alimenta mis conocimientos en mi ámbito profesional. Esto me ayuda a crecer como ser humano principalmente y me da carta abierta en el ámbito donde me rodeo.',
            date: 'Ángel Cargua C.',
            urlNews: ''
        },
    ];
    public studies: Array<{ imgUrl: string, title: string, resume: string, date: string, urlNews: string, }> = [
        {
            imgUrl: '../../../assets/modules/escuela-salud/PORTADA.png',
            title: 'Salud',
            resume: 'El Tecnólogo en Instrumentación Quirúrgica es un profesional altamente capacitado en el uso, mantenimiento ...',
            date: moment().format('LL'),
            urlNews: 'escuela-salud#SALUD'
        },
        {
            imgUrl: '../../../assets/modules/escuela-veterinaria/PORTADA ENFERMERIA.png',
            title: 'Enfermería Veterinaria',
            resume: 'Formar Tecnólogos en Enfermería Veterinaria con competencias que les permita atender ampliamente las ...',
            date: moment().format('LL'),
            urlNews: 'escuela-veterinaria#ENFERMERIA'
        },
        {
            imgUrl: '../../../assets/modules/escuela-veterinaria/PORTADA PRODUCCION ANIMAL.png',
            title: 'Producción Animal',
            resume: 'El Tecnólogo en Producción Animal es un profesional capacitado para criar y cuidar especies de producción ...',
            date: moment().format('LL'),
            urlNews: 'escuela-veterinaria#PRODUCCION_AMINAL'
        },
        {
            imgUrl: '../../../assets/modules/escuela-educacion-humanidades/PORTADA1.png',
            title: 'Educación Básica',
            resume: 'El Tecnólogo en Educación General Básica es un profesional íntegro, centrado en el ser humano, con principios ...',
            date: moment().format('LL'),
            urlNews: 'escuela-educacion-humanidades#EDUCACION_BASICA'
        },
        {
            imgUrl: '../../../assets/modules/escuela-construccion-extraccion/PORTADA TOPOGRAFIA.png',
            title: 'Topografía',
            resume: 'El Tecnólogo en Topografía es un profesional con sólidos conocimientos teóricos, científicos, prácticos y ...',
            date: moment().format('LL'),
            urlNews: 'escuela-construccion-extraccion#TOPOGRAFIA'
        },
        {
            imgUrl: '../../../assets/modules/escuela-construccion-extraccion/PORTADA MINERIA.png',
            title: 'Minería',
            resume: 'El Tecnólogo en Minería es un profesional con sólidos conocimientos teóricos y prácticos en los procesos ...',
            date: moment().format('LL'),
            urlNews: 'escuela-construccion-extraccion#MINERIA'
        },
        {
            imgUrl: '../../../assets/modules/escuela-administracion-industria/PORTADA ADMINSTRACION.png',
            title: 'Administración',
            resume: 'Formar profesionales en Administración que desarrollen competencias y habilidades en el ámbito de la contabilidad ...',
            date: moment().format('LL'),
            urlNews: 'escuela-administracion-industria#ADMINISTRACION'
        },
        {
            imgUrl: '../../../assets/modules/escuela-administracion-industria/PORTADA MARKETING.png',
            title: 'Marketing Digital',
            resume: 'Formar profesionales en Marketing Digital que desarrollen competencias y habilidades en el ámbito de la comunicación ...',
            date: moment().format('LL'),
            urlNews: 'escuela-administracion-industria#MARKETING'
        },
    ];
    public swiperElement = signal<SwiperContainer | null>(null);
    constructor(@Inject(DOCUMENT) private document: Document) {
        this.updateScreenWidth();
    }
    ngAfterViewInit(): void {
        const swiperElementConstructor = this.document.querySelector(`#${this.elementId}`);
        if (swiperElementConstructor) {
            //styles
            setTimeout(() => {
                const prvbtn = swiperElementConstructor.shadowRoot.children[0].children[4];
                const nextbtn = swiperElementConstructor.shadowRoot.children[0].children[5];
                prvbtn.setAttribute('style', 'transform: translateY(-65%)');
                nextbtn.setAttribute('style', 'transform: translateY(-65%)');
            }, 500);

            const swiperOptions: SwiperOptions = {
                slidesPerView: this.screenWidth <= 835 ? 1 : 4,
                loop: true,
                navigation: {
                    enabled: true,

                },
                pagination: {
                    enabled: this.hasPagination,
                    clickable: true,
                },
                spaceBetween: '24px',
                centeredSlidesBounds: true,
                centeredSlides: true,
            };
            Object.assign(swiperElementConstructor!, swiperOptions);
            this.swiperElement.set(swiperElementConstructor as SwiperContainer);
            this.swiperElement()?.initialize();
        }
    }
    action() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.componentName.emit('contentSlider');
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

}
