import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from 'src/app/modules/components/footer/footer.component';
import { MenuWidgetComponent } from 'src/app/modules/components/menu-widget/menu-widget.component';
import { ShortcutWidgetComponent } from 'src/app/modules/components/shortcut-widget/shortcut-widget.component';
import { WhatsappComponent } from 'src/app/modules/components/whatsapp/whatsapp.component';

@Component({
    selector: 'app-clubs',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        WhatsappComponent,
        ShortcutWidgetComponent,
        MenuWidgetComponent
    ],
    templateUrl: './clubs.component.html',
    styleUrl: './clubs.component.scss'
})
export class ClubsComponent {

    title: string = 'TODOS';

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get('title') ?? 'TODOS';
        this.title = history.state.title ?? this.title;
    }

}
