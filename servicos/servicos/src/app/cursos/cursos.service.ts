import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosServices {
  numero: number = 0;

  static emitirCursoCriado = new EventEmitter();

  private cursos: string[] = ['angular 2', 'java', 'phonegap'];

  constructor() {
    console.log('Instanciou: ', this.numero++);
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    CursosServices.emitirCursoCriado.emit(curso);
  }
}
