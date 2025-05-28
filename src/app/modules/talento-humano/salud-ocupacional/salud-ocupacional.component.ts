import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-salud-ocupacional',
    standalone: true,
    imports: [
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './salud-ocupacional.component.html',
    styleUrl: './salud-ocupacional.component.scss'
})
export class SaludOcupacionalComponent implements OnInit, AfterViewInit {
    pdfs = [
        { id: 'pdf-container1', name: 'Matriz de Riesgos', src: '/assets/modules/talento-humano/salud-ocupacional/Matriz de Riesgos.pdf' },
        { id: 'pdf-container2', name: 'Plan de Emergencia', src: '/assets/modules/talento-humano/salud-ocupacional/plan de emergencia.pdf' },
        { id: 'pdf-container3', name: 'Reglamento', src: '/assets/modules/talento-humano/salud-ocupacional/Reglamento.pdf' },
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué pdfs están desplegados
    @ViewChild('soVideo') soVideo!: ElementRef<HTMLVideoElement>;

    ngOnInit() {
        // Inicializar estado colapsado para todos los pdfs
        this.pdfs.forEach(pdf => {
            this.expandedState[pdf.id] = false;
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

    ngAfterViewInit(): void {

        const video = this.soVideo.nativeElement;

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
        const video = this.soVideo.nativeElement;

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
