import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosServices } from './cursos/cursos.service';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    ReceberCursoCriadoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CursosServices, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
