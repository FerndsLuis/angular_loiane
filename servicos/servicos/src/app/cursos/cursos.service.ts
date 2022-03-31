import { Injectable } from '@angular/core';

@Injectable()
export class CursosServices {
  numero: number = 0;

  private cursos: string[] = ['angular 2', 'java', 'phonegap'];

  constructor() {
    console.log('Instanciou: ', this.numero++);
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}
