import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-biblioteca-dra',
  standalone: true,
  imports: [
    TimelineModule,
    CommonModule,
    FooterComponent,
    ShortcutWidgetComponent,
    MenuWidgetComponent,
    WhatsappComponent
  ],
  templateUrl: './biblioteca-dra.component.html',
  styleUrl: './biblioteca-dra.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BibliotecaDraComponent  implements AfterViewInit {
    @ViewChild('draVideo') draVideo!: ElementRef<HTMLVideoElement>;

    ngAfterViewInit(): void {

        const video = this.draVideo.nativeElement;

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
        const video = this.draVideo.nativeElement;

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
