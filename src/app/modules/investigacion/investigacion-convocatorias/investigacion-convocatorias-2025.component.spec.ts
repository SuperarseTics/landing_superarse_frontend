import { ComponentFixture,TestBed } from "@angular/core/testing";

import { InvestigacionConvocatoriasComponent } from './investigacion-convocatorias-2025.component';

describe('InvestigacionConvocatoriasComponent', () => {
    let component: InvestigacionConvocatoriasComponent;
    let fixture: ComponentFixture<InvestigacionConvocatoriasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InvestigacionConvocatoriasComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(InvestigacionConvocatoriasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
