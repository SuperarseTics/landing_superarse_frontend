import { AfterViewInit, Component, ComponentRef, ElementRef, HostListener, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { SliderComponent } from "../components/slider/slider.component";
import { SearcherComponent } from "../components/searcher/searcher.component";
import { GridColumnsComponent } from "../components/grid-columns/grid-columns.component";
import { ContentSliderComponent } from "../components/content-slider/content-slider.component";
import { MultimediaComponent } from "../components/multimedia/multimedia.component";
import { FooterComponent } from "../components/footer/footer.component";
import { EditorService } from '../editor.service';
import { Observable } from 'rxjs';
import { GlobalSettings } from '../content-manager/Models/GlobalSettings';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { Pages } from '../content-manager/Models/Page';
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
    selector: 'app-result-page',
    standalone: true,
    imports: [CommonModule, ShortcutWidgetComponent, MenuWidgetComponent, SliderComponent, SearcherComponent, GridColumnsComponent, ContentSliderComponent, MultimediaComponent, FooterComponent, WhatsappComponent],
    templateUrl: './result-page.component.html',
    styleUrl: './result-page.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ResultPageComponent implements OnInit, AfterViewInit {
    public pageSettings$: Observable<GlobalSettings> = new Observable();
    private componentRefSlider!: ComponentRef<SliderComponent>;
    constructor(private _editorService: EditorService, private _meta: Meta) { }
    @ViewChild('myCanva', { static: false, read: ViewContainerRef }) canvaElement!: ViewContainerRef;
    @ViewChild('introVideo') introVideo!: ElementRef<HTMLVideoElement>;

    @Input() pageWidgets: Pages = {
        id: 1,
        name: '',
        widgets: [],
    };
    ngOnInit(): void {
        this.pageSettings$ = this._editorService.globalSettings$;
    }

    ngAfterViewInit(): void {

        const video = this.introVideo.nativeElement;

        // Asegurar que el video esté completamente cargado antes de reproducirlo
        video.addEventListener('canplaythrough', () => {
            console.log("El video está listo para reproducirse");
            this.playVideo();
        });

        // Intentar reproducir inmediatamente después de que Angular renderiza la vista
        setTimeout(() => {
            this.playVideo();
        }, 1000); // Pequeño delay para permitir la carga del DOM

        // Volver a intentar cuando el usuario cambia de pestaña y regresa
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.playVideo();
            }
        });

        setTimeout(() => {
            this._editorService.pages$.subscribe({
                next: (pages) => {
                    if (pages.length > 0) {
                        pages[0].widgets.forEach(widget => {
                            switch (widget.type) {
                                case 'hero-slider':
                                    this.generateSlider(widget.properties)
                                    break;
                            }
                        });
                    }
                }
            });
        }, 0);
    }

    private playVideo() {
        const video = this.introVideo.nativeElement;

        if (video.paused) {
            video.play().then(() => {
                console.log("Video reproducido automáticamente");
            }).catch(error => {
                console.log("Autoplay bloqueado. Intentando con mute activado...");
                video.muted = true;
                video.play().catch(err => console.log("Aún bloqueado:", err));
            });
        }
    }

    public generateSlider(props: any): void {
        this.componentRefSlider = this.canvaElement.createComponent(SliderComponent);
        this.componentRefSlider.instance.componentRef = this.componentRefSlider;
        this.componentRefSlider.instance.gallery = props.slides;
        this.componentRefSlider.instance.removeComponent.subscribe((cmp) => {

        });
    }
}
