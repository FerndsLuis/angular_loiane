import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosServices } from './cursos/cursos.service';

@NgModule({
  declarations: [AppComponent, CursosComponent, CriarCursoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CursosServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
