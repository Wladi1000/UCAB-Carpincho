import { generarPlanillaPropuestaTEG } from './generadorDOCX/planilla_propuesta_TEG'

export class PlanillaPropuestaTEG{

  constructor(
    titulo,
    organizacion,
    empresa,
    tutor_academico
  ){
    this.fecha_envio = new Date();
    this.titulo = titulo;
    this.organizacion = organizacion;
    this.alumno = [];
    this.empresa = empresa;
    this.tutor_academico = tutor_academico;
  };
  añadirAlumno ( alumno ){
    if (this.alumno.length < 2)
      this.alumno.push( alumno );
    else
      alert('No se pueden añadir mas de 2 alumnos por Trabajo de Grado');
  };
  imprimir(){
    generarPlanillaPropuestaTEG( this );
  }
}