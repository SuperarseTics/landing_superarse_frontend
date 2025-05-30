import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private _layoutService:LayoutService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this._layoutService.config.update((config) => ({
            ...config,
            theme: 'tailwind-light',
        }));
    }
}
