export class PropuestaTg{
  constructor(){
    this.titulo;
    this.fecha;
    this.alumnos;
    this.revisor = null;
    this.tutor_academico;
    this.tutor_empresarial = null;
    this.status;
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