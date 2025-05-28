import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../components/menu-widget/menu-widget.component";
import { PipesModule } from './pipes.module';  // Importa el módulo de pipes
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";
import { PdfViewerComponent } from '../components/pdf-viewer/pdf-viewer.component';

@Component({
    selector: 'app-reglamento',
    standalone: true,
    imports: [
        PipesModule,
        TimelineModule,
        CommonModule,
        FooterComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent,
        WhatsappComponent,
        PdfViewerComponent
    ],
    templateUrl: './reglamento.component.html',
    styleUrls: ['./reglamento.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ReglamentoComponent implements OnInit {
    reglamentos = [
        { id: 'pdf-container1', name: 'REGLAMENTO DE GESTIÓN INTERNA DE LA BIBLIOTECA DRA MERY NAVAS', src: '/assets/modules/reglamento/REGLAMENTO_DE_GESTION_INTERNA_DE_LA_BIBLIOTECA_DRA_MERY_NAVAS.pdf' },
        { id: 'pdf-container2', name: 'REGLAMENTO DE EDUCACIÓN CONTINUA', src: '/assets/modules/reglamento/REGLAMENTO_DE_EDUCACION_CONTINUA.pdf' },
        { id: 'pdf-container3', name: 'REGLAMENTO DE INVESTIGACIÓN, DESARROLLO E INNOVACIÓN', src: '/assets/modules/reglamento/REGLAMENTO_DE_INVESTIGACION_DESARROLLO_E_INNOVACION.pdf' },
        { id: 'pdf-container4', name: 'REGLAMENTO DE VINCULACIÓN CON LA SOCIEDAD', src: '/assets/modules/reglamento/REGLAMENTO_DE_VINCULACION_CON_LA_SOCIEDAD.pdf' },
        { id: 'pdf-container5', name: 'REGLAMENTO PARA EL PROCEDIMIENTO DE SUSCRIPCIÓN Y SEGUIMIENTO', src: '/assets/modules/reglamento/REGLAMENTO PARA EL PROCEDIMIENTO DE SUSCRIPCION Y SEGUIMIENTO.pdf' },
        { id: 'pdf-container6', name: 'REGLAMENTO PARA EL USO DEL ENTORNO VIRTUAL DE APRENDIZAJE EVA', src: '/assets/modules/reglamento/REGLAMENTO PARA EL USO DEL ENTORNO VIRTUAL DE APRENDIZAJE EVA.pdf' },
        { id: 'pdf-container7', name: 'REGLAMENTO PARA LA FORMACIÓN PRACTICA EN EL ENTORNO ACADÉMICO', src: '/assets/modules/reglamento/REGLAMENTO PARA LA FORMACION PRACTICA EN EL ENTORNO ACADEMICO.pdf' },
        { id: 'pdf-container8', name: 'REGLAMENTO DEL COMITÉ DE BIOÉTICA', src: '/assets/modules/reglamento/REGLAMENTO_ DEL_ COMITE_DE_BIOETICA.pdf' },
        { id: 'pdf-container9', name: 'REGLAMENTO DE ASEGURAMIENTO INTERNO DE LA CALIDAD', src: '/assets/modules/reglamento/REGLAMENTO_DE_ASEGURAMIENTO_INTERNO_DE_LA_CALIDAD.pdf' },
        { id: 'pdf-container10', name: 'REGLAMENTO DE CAPACITACIÓN Y PERFECCIONAMIENTO PROFESIONAL', src: '/assets/modules/reglamento/REGLAMENTO_DE_CAPACITACION_Y_PERFECCIONAMIENTO_PROFESIONAL.pdf' },
        { id: 'pdf-container11', name: 'REGLAMENTO DE SEGUIMIENTO A LOS GRADUADOS', src: '/assets/modules/reglamento/REGLAMENTO DE SEGUIMIENTO A LOS GRADUADOS.pdf' },
        { id: 'pdf-container12', name: 'REGLAMENTO DE TITULACIÓN', src: '/assets/modules/reglamento/REGLAMENTO DE TITULACION.pdf' },
        { id: 'pdf-container13', name: 'REGLAMENTO DEL COMITÉ EDITORIAL', src: '/assets/modules/reglamento/REGLAMENTO DEL COMITE_EDITORIAL.pdf' },
        { id: 'pdf-container14', name: 'REGLAMENTO DEL CONSEJO DE REGENTES', src: '/assets/modules/reglamento/REGLAMENTO DEL CONSEJO DE REGENTES.pdf' },
        { id: 'pdf-container15', name: 'REGLAMENTO DEL REPOSITORIO DOCUMENTAL SIG', src: '/assets/modules/reglamento/REGLAMENTO DEL REPOSITORIO DOCUMENTAL SIG.pdf' },
        { id: 'pdf-container16', name: 'REGLAMENTO DEL SISTEMA DE PLANIFICACIÓN ESTRATÉGICA Y OPERATIVA', src: '/assets/modules/reglamento/REGLAMENTO DEL SISTEMA DE PLANIFICACION ESTRATEGICA Y OPERATIVA.pdf' },
        { id: 'pdf-container17', name: 'REGLAMENTO DE SISTEMA DE SEGUIMIENTO, CONTROL Y EVALUACIÓN', src: '/assets/modules/reglamento/REGLAMENTO DE SISTEMA DE SEGUIMIENTO CONTROL Y EVALUACION.pdf' },
        { id: 'pdf-container18', name: 'REGLAMENTO DE ELECCIONES CONSEJO ESTUDIANTIL', src: '/assets/modules/reglamento/REGLAMENTO DE ELECCIONES CONSEJO ESTUDIANTIL.pdf' },
        { id: 'pdf-container19', name: 'REGLAMENTO DE ESTUDIANTES', src: '/assets/modules/reglamento/REGLAMENTO DE ESTUDIANTES.pdf' },
        { id: 'pdf-container20', name: 'REGLAMENTO DE POLÍTICAS DE ACCIÓN AFIRMATIVA', src: '/assets/modules/reglamento/REGLAMENTO DE POLITICAS DE ACCION AFIRMATIVA.pdf' },
        { id: 'pdf-container21', name: 'REGLAMENTO DE PRÁCTICAS PREPROFESIONALES', src: '/assets/modules/reglamento/REGLAMENTO DE PRACTICAS PRE-PROFESIONALES.pdf' },
        { id: 'pdf-container22', name: 'REGLAMENTO DE RECONOCIMIENTO U HOMOLOGACIÓN', src: '/assets/modules/reglamento/REGLAMENTO DE RECONOCIMIENTO U HOMOLOGACION.pdf' },
        { id: 'pdf-container23', name: 'REGLAMENTO DE ADMISIÓN, MATRICULACIÓN, NIVELACIÓN, ACOMPAÑAMIENTO', src: '/assets/modules/reglamento/REGLAMENTO DE ADMISION, MATRICULACION, NIVELACION, ACOMPAÑAMIENT.pdf' },
        { id: 'pdf-container24', name: 'REGLAMENTO DE BECAS Y AYUDAS ECONÓMICAS', src: '/assets/modules/reglamento/REGLAMENTO DE BECAS Y AYUDAS ECONOMICAS.pdf' },
        { id: 'pdf-container25', name: 'REGLAMENTO DE BUENAS PRACTICAS AMBIENTALES', src: '/assets/modules/reglamento/REGLAMENTO DE BUENAS PRACTICAS AMBIENTALES.pdf' },
        { id: 'pdf-container26', name: 'REGLAMENTO DE CARRERA Y ESCALAFÓN DEL PERSONAL ACADÉMICO', src: '/assets/modules/reglamento/REGLAMENTO DE CARRERA Y ESCALAFON DEL PERSONAL ACADEMICO.pdf' },

        // { id: 'pdf-container6', name: 'REGLAMENTO DE BECAS Y AYUDAS ECONÓMICAS UNIFICADO', src: '/assets/modules/reglamento/REGLAMENTO DE BECAS Y AYUDAS ECONÓMICAS UNIFICADO.pdf' },
        // { id: 'pdf-container11', name: 'REGLAMENTO DE ELECCIONES', src: '/assets/modules/reglamento/REGLAMENTO DE ELECCIONES.pdf' },
        // { id: 'pdf-container12', name: 'REGLAMENTO DE EVALUACIÓN INTEGRAL Y MEJORAMIENTO DEL DESEMPEÑO DEL PERSONAL', src: '/assets/modules/reglamento/REGLAMENTO DE EVALUACIÓN INTEGRAL Y MEJORAMIENTO DEL DESEMPEÑO DEL PERSONAL.pdf' },
        // { id: 'pdf-container13', name: 'REGLAMENTO DE GESTIÓN INTERNA DE LA BIBLIOTECA', src: '/assets/modules/reglamento/REGLAMENTO DE GESTIÓN INTERNA DE LA BIBLIOTECA.pdf' },
        // { id: 'pdf-container14', name: 'REGLAMENTO DE INVESTIGACIÓN, DESARROLLO E INNOVACIÓN', src: '/assets/modules/reglamento/REGLAMENTO DE INVESTIGACIÓN, DESARROLLO E INNOVACION.pdf' },
        // { id: 'pdf-container16', name: 'REGLAMENTO DE PRÁCTICAS PRE-PROFESIONALES', src: '/assets/modules/vinculación/3017_783_COD_3282_100225173133.pdf' },
        // { id: 'pdf-container17', name: 'REGLAMENTO DE RECONOCIMIENTO U HOMOLOGACIÓN', src: '/assets/modules/reglamento/REGLAMENTO DE RECONOCIMIENTO U HOMOLOGACION.pdf' },
        // { id: 'pdf-container18', name: 'REGLAMENTO DE SEGUIMIENTO A LOS GRADUADOS Y BOLSA DE EMPLEO', src: '/assets/modules/reglamento/REGLAMENTO DE SEGUIMIENTO A LOS GRADUADOS Y BOLSA DE EMPLEO.pdf' },
    ];

    expandedState: { [key: string]: boolean } = {}; // Controla qué reglamentos están desplegados

    ngOnInit() {
        // Inicializar estado colapsado para todos los reglamentos
        this.reglamentos.forEach(reglamento => {
            this.expandedState[reglamento.id] = false;
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
}
