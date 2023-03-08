import { generarCartaDesignacionRevisor } from './generadorDOCX/carta_designacion_revisor';
import { _ } from 'lodash';
export class PlanillaDesignacionRevisor {
  constructor(
    titulo,
    tutor,
    fecha_designacion,
    administrador,
    modalidad,
    revisor
  ) {
    this.propuesta = {
      titulo: titulo,
      alumno: [],
      tutor: tutor
    };
    this.fecha_designacion = fecha_designacion;
    this.administrador = administrador.nombre;
    this.correo_administrador = administrador.correo_administrador
    this.modalidad = modalidad;
    this.revisor = revisor;
  };
  añadirAlumno( alumno ){
    if (this.propuesta.alumno.length < 2)
    this.propuesta.alumno.push( alumno );
  else
    alert('No se pueden añadir mas de 2 alumnos por Trabajo de Grado');
  }
  imprimir() {
    generarCartaDesignacionRevisor( this )
    alert('Generado con exito! UwU');
  };
}