import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', loadChildren: () => import('./modules/result-page/result-page.module').then(m => m.ResultPageModule) },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    // { path: '', loadChildren: ()=> import('./modules/result-page/result-page.module') .then(m => m.ResultPageModule)},
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'content-manager/global', loadChildren: () => import('./modules/content-manager/global/global.module').then(m => m.GlobalModule) },
                    { path: 'content-manager/pages', loadChildren: () => import('./modules/content-manager/pages/pages.module').then(m => m.PagesModule), },
                    { path: 'content-manager/articles', loadChildren: () => import('./modules/content-manager/articles/articles.module').then(m => m.ArticlesModule), },
                    { path: 'content-manager/multimedia-manager', loadComponent: () => import('./modules/content-manager/multimedia-manager/multimedia-manager.component').then(m => m.MultimediaManagerComponent), },
                ]
            },
            { path: 'autoridades', loadComponent: () => import('./modules/autoridades/autoridades.component').then(m => m.AutoridadesComponent) },
            { path: 'codigos', loadComponent: () => import('./modules/codigos/codigos.component').then(m => m.CodigosComponent) },
            { path: 'modelos', loadComponent: () => import('./modules/modelo/modelo.component').then(m => m.ModeloComponent) },
            { path: 'reglamento', loadComponent: () => import('./modules/reglamento/reglamento.component').then(m => m.ReglamentoComponent) },
            { path: 'normativa', loadComponent: () => import('./modules/normativa/normativa.component').then(m => m.NormativaComponent) },
            { path: 'protocolo', loadComponent: () => import('./modules/protocolo/protocolo.component').then(m => m.ProtocoloComponent) },
            { path: 'elegirnos', loadComponent: () => import('./modules/elegirnos/elegirnos.component').then(m => m.ElegirnosComponent) },
            { path: 'proceso-adminision', loadComponent: () => import('./modules/proceso-adminision/proceso-adminision.component').then(m => m.ProcesoAdminisionComponent) },
            { path: 'biblioteca-virtual-e-libro', loadComponent: () => import('./modules/biblioteca-virtual-e-libro/biblioteca-virtual-e-libro.component').then(m => m.BibliotecaVirtualELibroComponent) },
            { path: 'biblioteca-dra-mery-navas', loadComponent: () => import('./modules/biblioteca-dra/biblioteca-dra.component').then(m => m.BibliotecaDraComponent) },

            { path: 'misionvision', loadComponent: () => import('./modules/misionvision/misionvision.component').then(m => m.MisionVisionComponent) },
            { path: 'valores', loadComponent: () => import('./modules/valores/valores.component').then(m => m.ValoresComponent) },
            { path: 'modelo-pedagogico', loadComponent: () => import('./modules/modelo-pedagogico/modelo-pedagogico.component').then(m => m.ModeloPedagogicoComponent) },
            { path: 'modelo-educativo', loadComponent: () => import('./modules/modelo-educativo/modelo-educativo.component').then(m => m.ModeloEducativoComponent) },
            { path: 'organigrama', loadComponent: () => import('./modules/organigrama/organigrama.component').then(m => m.OrganigramaComponent) },
            { path: 'estatuto', loadComponent: () => import('./modules/estatuto/estatuto.component').then(m => m.EstatutoComponent) },
            { path: 'aseguramiento-de-la-calidad', loadComponent: () => import('./modules/aseguramiento-de-la-calidad/aseguramiento-de-la-calidad.component').then(m => m.AseguramientoDeLaCalidadComponent) },
            { path: 'mensaje-rectora', loadComponent: () => import('./modules/mensaje-rectora/mensaje-rectora.component').then(m => m.MensajeRectoraComponent) },
            { path: 'pdf-viewer', loadComponent: () => import('./modules/components/empty-tab/empty-tab.component').then(m => m.EmptyTabComponent) },
            { path: 'other-page/:submenu', loadComponent: () => import('./modules/components/other-page/other-page.component').then(m => m.OtherPageComponent) },
            { path: 'titulacion', loadComponent: () => import('./modules/titulacion/titulacion.component').then(m => m.TitulacionComponent) },
            { path: 'evaluacion-docente', loadComponent: () => import('./modules/evaluacion-docente/evaluacion-docente.component').then(m => m.EvaluacionDocenteComponent) },
            { path: 'talleres-practicos', loadComponent: () => import('./modules/talleres-practicos/talleres-practicos.component').then(m => m.TalleresPracticosComponent) },
            { path: 'calendario', loadComponent: () => import('./modules/calendario/calendario.component').then(m => m.CalendarioComponent) },

            // bienestar institucional
            { path: 'estado-financiero', loadComponent: () => import('./modules/bienestar-institucional/estado-financiero/estado-financiero.component').then(m => m.EstadoFinancieroComponent) },
            { path: 'bienestar-institucional', loadComponent: () => import('./modules/bienestar-institucional/bienestar-institucional.component').then(m => m.BienestarInstitucionalComponent) },
            { path: 'bolsa-empleo', loadComponent: () => import('./modules/bienestar-institucional/bolsa-empleo/bolsa-empleo.component').then(m => m.BolsaEmpleoComponent) },
            { path: 'estado-financiero', loadComponent: () => import('./modules/bienestar-institucional/estado-financiero/estado-financiero.component').then(m => m.EstadoFinancieroComponent) },
            { path: 'rendicion-cuentas', loadComponent: () => import('./modules/bienestar-institucional/rendicion-cuentas/rendicion-cuentas.component').then(m => m.RendicionCuentasComponent) },
            { path: 'remuneracion-mensual', loadComponent: () => import('./modules/bienestar-institucional/remuneracion-mensual/remuneracion-mensual.component').then(m => m.RemuneracionMensualComponent) },
            { path: 'aranceles', loadComponent: () => import('./modules/bienestar-institucional/aranceles/aranceles.component').then(m => m.ArancelesComponent) },
            { path: 'balance-general', loadComponent: () => import('./modules/bienestar-institucional/balance-general/balance-general.component').then(m => m.BalanceGeneralComponent) },
            { path: 'cumpliento-tributario', loadComponent: () => import('./modules/bienestar-institucional/cumpliento-tributario/cumpliento-tributario.component').then(m => m.CumplientoTributarioComponent) },
            { path: 'pedi', loadComponent: () => import('./modules/bienestar-institucional/pedi/pedi.component').then(m => m.PediComponent) },
            { path: 'balances-auditados', loadComponent: () => import('./modules/bienestar-institucional/balances-auditados/balances-auditados.component').then(m => m.BalancesAuditadosComponent) },
            { path: 'plan-igualdad', loadComponent: () => import('./modules/bienestar-institucional/plan-igualdad/plan-igualdad.component').then(m => m.PlanIgualdadComponent) },
            { path: 'bi-denuncia', loadComponent: () => import('./modules/bienestar-institucional/bi-denuncia/bi-denuncia.component').then(m => m.BiDenunciaComponent) },
            { path: 'bi-propuesta-pedagogica', loadComponent: () => import('./modules/bienestar-institucional/bi-propuesta-pedagogica/bi-propuesta-pedagogica.component').then(m => m.BiPropuestaPedagogicaComponent) },
            { path: 'bi-servicios-1', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-1/bi-servicios-1.component').then(m => m.BiServicios1Component) },
            { path: 'bi-servicios-2', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-2/bi-servicios-2.component').then(m => m.BiServicios2Component) },
            { path: 'bi-servicios-3', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-3/bi-servicios-3.component').then(m => m.BiServicios3Component) },
            { path: 'bi-servicios-4', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-4/bi-servicios-4.component').then(m => m.BiServicios4Component) },
            { path: 'bi-servicios-5', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-5/bi-servicios-5.component').then(m => m.BiServicios5Component) },
            { path: 'club/:title', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-5/clubs/clubs.component').then(m => m.ClubsComponent) },
            { path: 'bi-servicios-6', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-6/bi-servicios-6.component').then(m => m.BiServicios6Component) },
            { path: 'bi-servicios-7', loadComponent: () => import('./modules/bienestar-institucional/bi-servicios-7/bi-servicios-7.component').then(m => m.BiServicios7Component) },

            // talento humano
            { path: 'talento-humano', loadComponent: () => import('./modules/talento-humano/talento-humano.component').then(m => m.TalentoHumanoComponent) },
            { path: 'trabaja-con-nosotros', loadComponent: () => import('./modules/talento-humano/trabaja-con-nosotros/trabaja-con-nosotros.component').then(m => m.TrabajaConNosotrosComponent) },
            { path: 'trabaja-con-nosotros-pasos', loadComponent: () => import('./modules/talento-humano/trabaja-con-nosotros/button/button.component').then(m => m.ButtonComponent) },
            { path: 'postulacion', loadComponent: () => import('./modules/talento-humano/postulacion/postulacion.component').then(m => m.PostulacionComponent) },
            { path: 'seleccion-no-titulares', loadComponent: () => import('./modules/talento-humano/postulacion/seleccion-no-titulares/seleccion-no-titulares.component').then(m => m.SeleccionNoTitularesComponent) },
            { path: 'profesores-titulares', loadComponent: () => import('./modules/talento-humano/postulacion/profesores-titulares/profesores-titulares.component').then(m => m.ProfesoresTitularesComponent) },
            { path: 'mejores-evaluados', loadComponent: () => import('./modules/talento-humano/mejores-evaluados/mejores-evaluados.component').then(m => m.MejoresEvaluadosComponent) },
            { path: 'salud-ocupacional', loadComponent: () => import('./modules/talento-humano/salud-ocupacional/salud-ocupacional.component').then(m => m.SaludOcupacionalComponent) },

            // investigación
            { path: 'investigacion', loadComponent: () => import('./modules/investigacion/investigacion.component').then(m => m.InvestigacionComponent) },
            { path: 'investigacion-quienes-somos', loadComponent: () => import('./modules/investigacion/investigacion-quienes-somos/investigacion-quienes-somos.component').then(m => m.InvestigacionQuienesSomosComponent) },
            { path: 'investigacion-modelo-i-v', loadComponent: () => import('./modules/investigacion/investigacion-modelo-i-v/investigacion-modelo-i-v.component').then(m => m.InvestigacionModeloIVComponent) },
            { path: 'investigacion-normativa', loadComponent: () => import('./modules/investigacion/investigacion-normativa/investigacion-normativa.component').then(m => m.InvestigacionNormativaComponent) },
            { path: 'investigacion-dominios-linea', loadComponent: () => import('./modules/investigacion/investigacion-dominios-linea/investigacion-dominios-linea.component').then(m => m.InvestigacionDominiosLineaComponent) },
            { path: 'investigacion-proyectos-innovacion', loadComponent: () => import('./modules/investigacion/investigacion-proyectos-innovacion/investigacion-proyectos-innovacion.component').then(m => m.InvestigacionProyectosInnovacionComponent) },
            { path: 'investigacion-redes-cientificas', loadComponent: () => import('./modules/investigacion/investigacion-redes-cientificas/investigacion-redes-cientificas.component').then(m => m.InvestigacionRedesCientificasComponent) },
            { path: 'investigacion-eventos-congreso-2023', loadComponent: () => import('./modules/investigacion/investigacion-eventos-congreso-2023/investigacion-eventos-congreso-2023.component').then(m => m.InvestigacionEventosCongreso2023Component) },
            { path: 'investigacion-eventos-seminario-equino', loadComponent: () => import('./modules/investigacion/investigacion-eventos-seminario-equino/investigacion-eventos-seminario-equino.component').then(m => m.InvestigacionEventosSeminarioEquinoComponent) },
            { path: 'investigacion-eventos-simposio-administracion', loadComponent: () => import('./modules/investigacion/investigacion-eventos-simposio-administracion/investigacion-eventos-simposio-administracion.component').then(m => m.InvestigacionEventosSimposioAdministracionComponent) },
            { path: 'investigacion-convocatorias', loadComponent: () => import('./modules/investigacion/investigacion-convocatorias/investigacion-convocatorias-2025.component').then(m => m.InvestigacionConvocatoriasComponent) },
            { path: 'investigacion-publicaciones-may-oct-2024', loadComponent: () => import('./modules/investigacion/investigacion-publicaciones-may-oct-2024/investigacion-publicaciones-may-oct-2024.component').then(m => m.InvestigacionPublicacionesMayOct2024Component) },
            { path: 'investigacion-publicaciones-nov2023-abr2024', loadComponent: () => import('./modules/investigacion/investigacion-publicaciones-nov2023-abr2024/investigacion-publicaciones-nov2023-abr2024.component').then(m => m.InvestigacionPublicacionesNov2023Abr2024Component) },
            { path: 'investigacion-publicaciones-may-oct-2023', loadComponent: () => import('./modules/investigacion/investigacion-publicaciones-may-oct-2023/investigacion-publicaciones-may-oct-2023.component').then(m => m.InvestigacionPublicacionesMayOct2023Component) },
            { path: 'investigacion-publicaciones-nov2022-abr2023', loadComponent: () => import('./modules/investigacion/investigacion-publicaciones-nov2022-abr2023/investigacion-publicaciones-nov2022-abr2023.component').then(m => m.InvestigacionPublicacionesNov2022Abr2023Component) },
            { path: 'investigacion-reglamento', loadComponent: () => import('./modules/investigacion/investigacion-reglamento/investigacion-reglamento.component').then(m => m.InvestigacionReglamentoComponent) },

            // vinculación
            { path: 'vinculacion', loadComponent: () => import('./modules/vinculacion/vinculacion.component').then(m => m.VinculacionComponent) },
            { path: 'modelo-idi-vs', loadComponent: () => import('./modules/vinculacion/modelo-idi-vs/modelo-idi-vs.component').then(m => m.ModeloIdiVsComponent) },
            { path: 'vinculacion-mensaje', loadComponent: () => import('./modules/vinculacion/vinculacion-mensaje/vinculacion-mensaje.component').then(m => m.VinculacionMensajeComponent) },
            { path: 'equipo-trabajo', loadComponent: () => import('./modules/vinculacion/equipo-trabajo/equipo-trabajo.component').then(m => m.EquipoTrabajoComponent) },
            { path: 'programa-proyectos-vinculacion', loadComponent: () => import('./modules/vinculacion/programa-proyectos-vinculacion/programa-proyectos-vinculacion.component').then(m => m.ProgramaProyectosVinculacionComponent) },
            { path: 'practicas-preprofesionales', loadComponent: () => import('./modules/vinculacion/practicas-preprofesionales/practicas-preprofesionales.component').then(m => m.PracticasPreprofesionalesComponent) },
            { path: 'relaciones-interinstitucionales', loadComponent: () => import('./modules/vinculacion/relaciones-interinstitucionales/relaciones-interinstitucionales.component').then(m => m.RelacionesInterinstitucionalesComponent) },
            { path: 'presencia-comunidad', loadComponent: () => import('./modules/vinculacion/presencia-comunidad/presencia-comunidad.component').then(m => m.PresenciaComunidadComponent) },
            { path: 'proyecto/:title', loadComponent: () => import('./modules/vinculacion/proyectos/proyectos.component').then(m => m.ProyectosComponent) },

            // escuelas
            { path: 'escuela/:title', loadComponent: () => import('./modules/escuelas/escuelas.component').then(m => m.EscuelasComponent) },
            { path: 'escuela-salud', loadComponent: () => import('./modules/escuelas/escuela-salud/escuela-salud.component').then(m => m.EscuelaSaludComponent) },
            { path: 'escuela-educacion-humanidades', loadComponent: () => import('./modules/escuelas/escuela-educacion-humanidades/escuela-educacion-humanidades.component').then(m => m.EscuelaEducacionHumanidadesComponent) },
            { path: 'escuela-veterinaria', loadComponent: () => import('./modules/escuelas/escuela-veterinaria/escuela-veterinaria.component').then(m => m.EscuelaVeterinariaComponent) },
            { path: 'escuela-administracion-industria', loadComponent: () => import('./modules/escuelas/escuela-administracion-industria/escuela-administracion-industria.component').then(m => m.EscuelaAdministracionIndustriaComponent) },
            { path: 'escuela-construccion-extraccion', loadComponent: () => import('./modules/escuelas/escuela-construccion-extraccion/escuela-construccion-extraccion.component').then(m => m.EscuelaConstruccionExtraccionComponent) },
            { path: 'escuela-salud/:title', loadComponent: () => import('./modules/escuelas/escuela-salud/escuela-salud.component').then(m => m.EscuelaSaludComponent) },
            { path: 'escuela-educacion-humanidades/:title', loadComponent: () => import('./modules/escuelas/escuela-educacion-humanidades/escuela-educacion-humanidades.component').then(m => m.EscuelaEducacionHumanidadesComponent) },
            { path: 'escuela-veterinaria/:title', loadComponent: () => import('./modules/escuelas/escuela-veterinaria/escuela-veterinaria.component').then(m => m.EscuelaVeterinariaComponent) },
            { path: 'escuela-administracion-industria/:title', loadComponent: () => import('./modules/escuelas/escuela-administracion-industria/escuela-administracion-industria.component').then(m => m.EscuelaAdministracionIndustriaComponent) },
            { path: 'escuela-construccion-extraccion/:title', loadComponent: () => import('./modules/escuelas/escuela-construccion-extraccion/escuela-construccion-extraccion.component').then(m => m.EscuelaConstruccionExtraccionComponent) },

            { path: 'result-page', loadChildren: () => import('./modules/result-page/result-page.module').then(m => m.ResultPageModule) },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
