// pipes.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';  // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [SafeUrlPipe],
  imports: [CommonModule],
  exports: [SafeUrlPipe]  // Esto permite que otros módulos lo utilicen
})
export class PipesModule {}
