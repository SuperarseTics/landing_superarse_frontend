import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShortcutWidgetComponent } from '../../components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from '../../components/menu-widget/menu-widget.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, FooterComponent, ShortcutWidgetComponent, MenuWidgetComponent, WhatsappComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit{

    title: string | null = null;
    data: [] | null = null;
    logo: string | null = null;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get('title') ?? '';
        this.title = history.state.title ?? this.title;
        this.data = history.state.data;
        this.logo = history.state.logo;
    }
}
