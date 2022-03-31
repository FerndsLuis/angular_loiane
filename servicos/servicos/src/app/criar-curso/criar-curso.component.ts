import { Component, OnInit } from '@angular/core';
import { CursosServices } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
})
export class CriarCursoComponent implements OnInit {
  cursos: string[] = [];
  curso: string = '';

  constructor(private cursosServices: CursosServices) {}

  ngOnInit(): void {
    this.cursos = this.cursosServices.getCursos();
  }

  public adicionarCurso(_curso: string) {
    this.curso = _curso;
    this.cursosServices.addCurso(this.curso);
  }
}
