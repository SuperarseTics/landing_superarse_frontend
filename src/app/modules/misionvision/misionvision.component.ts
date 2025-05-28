import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { ValoresComponent } from "../valores/valores.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    description?: string;
    name?: string;
}
@Component({
    selector: 'app-misionvision',
    standalone: true,
    imports: [TimelineModule, CommonModule, FooterComponent, WhatsappComponent, ValoresComponent, ShortcutWidgetComponent, MenuWidgetComponent],
    templateUrl: './misionvision.component.html',
    styleUrl: './misionvision.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class MisionVisionComponent implements AfterViewInit {
    @ViewChild('msVideo') msVideo!: ElementRef<HTMLVideoElement>;
    events: EventItem[];
    expandedState: { [key: string]: boolean } = {
        "mision": false,
        "valores": false,
        "vision": false
    }; // Controla qué reglamentos están desplegados

    constructor() {
        this.events = [
            { name: 'Fundación', status: 'Ordered', date: '2022', icon: 'pi pi-shopping-cart', color: '#9C27B0', description: 'Aqui yace la historia de Superarse' },
            { name: 'Certificación', status: 'Processing', date: '2023', icon: 'pi pi-cog', color: '#673AB7', description: 'Aqui yace la historia de Superarse' },
            { name: 'Aprobación', status: 'Shipped', date: '20235', icon: 'pi pi-shopping-cart', color: '#FF9800', description: 'Aqui yace la historia de Superarse' },
            { name: 'Mejoras', status: 'Delivered', date: '2024', icon: 'pi pi-check', color: '#607D8B', description: 'Aqui yace la historia de Superarse' }
        ];
    }

    toggleExpansion(id: string) {
        this.expandedState[id] = !this.expandedState[id];
    }
    ngAfterViewInit(): void {

        const video = this.msVideo.nativeElement;

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
    }

    private playVideo() {
        const video = this.msVideo.nativeElement;

        if (video.paused) {
            video.play().then(() => {
                console.log("Video reproducido automáticamente");
                video.volume = 0.5;
            }).catch(error => {
                console.log("Autoplay bloqueado. Intentando con mute activado...");
                video.muted = true;
                video.play().catch(err => console.log("Aún bloqueado:", err));
            });
        }
    }

}
