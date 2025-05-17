import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-plan-igualdad',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './plan-igualdad.component.html',
    styleUrl: './plan-igualdad.component.scss'
})
export class PlanIgualdadComponent  implements OnInit, AfterViewInit {
    anios = [
        {
            name: '2023',
            files: [
                {
                    id: 'pdf2023-conteiner1',
                    name: 'Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/PLAN 2023.pdf'
                },
                {
                    id: 'pdf2023-conteiner2',
                    name: 'Diagnóstico del Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/DIAGNOSTICO 2023.pdf'
                },
                {
                    id: 'pdf2023-conteiner3',
                    name: 'Resultados del Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/RESULTADOS 2023.pdf'
                }
            ]
        },
        {
            name: '2024',
            files: [
                {
                    id: 'pdf2024-conteiner1',
                    name: 'Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/PLAN 2024.pdf'
                },
                {
                    id: 'pdf2024-conteiner2',
                    name: 'Diagnóstico del Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/DIAGNOSTICO 2024.pdf'
                },
                {
                    id: 'pdf2024-conteiner3',
                    name: 'Resultados del Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/RESULTADOS 2024.pdf'
                }
            ]
        },
        {
            name: '2025',
            files: [
                {
                    id: 'pdf2025-conteiner1',
                    name: 'Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/PLAN 2025.pdf'
                },
                {
                    id: 'pdf2025-conteiner2',
                    name: 'Diagnóstico del Plan de Igualdad',
                    src: '/assets/modules/bienestar-institucional/DIAGNOSTICO 2025.pdf'
                }
            ]
        }
    ];

    @ViewChild('planVideo') planVideo!: ElementRef<HTMLVideoElement>;
    expandedState: { [key: string]: boolean } = {}; // Controla qué anios están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los anios
        this.anios.forEach(anio => {
            anio.files.forEach(file => {
                this.expandedState[file.id] = false;
            });
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

        const video = this.planVideo.nativeElement;

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
        const video = this.planVideo.nativeElement;

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
