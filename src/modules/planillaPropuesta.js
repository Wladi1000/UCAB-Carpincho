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
    this.comite_evaluador={
      id: '',
      descripcion_evaluacion: ''
    };
  };
  setPropuestaPendienteRevisor(){
    this.status = 'PR';
    return;
  };
  setPropuestaPendienteEscuela(){
    this.status = 'PE';
    return;
  };
  setPropuestaAprobada(){
    this.status = 'A';
    return;
  };
  setPropuestaRechazada(){
    this.estatus = 'R';
    return;
  }
  setRevidor(idRevisor){
    this.revisor = idRevisor;
    return;
  };
  setTutorAcademico(idTutorAcademico){
    this.tutor_academico = idTutorAcademico;
    return;
  };
};