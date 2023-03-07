import { generarPlanillaPropuestaTIG } from './generadorDOCX/planilla_propuesta_TIG'
import { _ } from 'lodash'
export class PlanillaPropuestaTIG{

  constructor(
    titulo,
    organizacion,
    empresa,
    tutor_empresarial
  ){
    this.fecha_envio = new Date();
    this.titulo = titulo;
    this.organizacion = organizacion;
    this.alumno = [];
    this.empresa = empresa;
    this.tutor_empresarial= tutor_empresarial;
  };
  añadirAlumno ( alumno ){
    if (this.alumno.length < 2)
      this.alumno.push( alumno );
    else
      alert('No se pueden añadir mas de 2 alumnos por Trabajo de Grado');
  };
  imprimir(){
    /*function convertProxyObjectToPojo(proxyObj) {
      return _.cloneDeep(proxyObj);
    }*/
    //let thisNoReactive = convertProxyObjectToPojo(this);
    //generarPlanillaPropuestaTEG( thisNoReactive );
    generarPlanillaPropuestaTIG( this );
  }
}