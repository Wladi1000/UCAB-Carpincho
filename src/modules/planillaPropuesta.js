export class PropuestaTg{
  constructor(){
    this.id_propuesta='';
    this.id_solicitud='';
    this.titulo='';
    this.fecha='';
    this.modalidad='';
    this.alumnos='';
    this.revisor = null;
    this.tutor_academico='';
    this.tutor_empresarial = null;
    this.estatus='';
  }
  setPropuestaPendienteRevisor(){
    this.status = 'PR'
  }
  setPropuestaPendienteEscuela(){
    this.status = 'PE'
  }
  setPropuestaAprobada(){
    this.status = 'A'
  }
  setPropuestaRechazada(){
    this.status = 'R'
  }
  setRevidor(idRevisor){
    this.revisor = idRevisor
  }
  setTutorAcademico(idTutorAcademico){
    this.tutor_academico = idTutorAcademico
  }
}