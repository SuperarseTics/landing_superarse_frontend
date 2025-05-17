import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from "../../components/footer/footer.component";
import { ShortcutWidgetComponent } from "../../components/shortcut-widget/shortcut-widget.component";
import { MenuWidgetComponent } from "../../components/menu-widget/menu-widget.component";
import { PipesModule } from '../../reglamento/pipes.module';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-other-page',
  standalone: true,
  imports: [PipesModule, TimelineModule, CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './other-page.component.html',
  styleUrl: './other-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OtherPageComponent implements OnInit {

    constructor(private router: Router) { }

    data: [];
    title: '';
    subtitle: '';

    ngOnInit() {
        this.data = history.state.data;
        this.title = history.state.title;
        this.subtitle = history.state.subtitle;
    }

    redirigir(route, title, src, type) {
        this.router.navigate([`${route}`], {
            state: {
                title,
                src, type
            }
        });
    }
}
