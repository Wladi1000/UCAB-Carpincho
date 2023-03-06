import { PlantillaDatosPersonales } from './plantillasDatosPersonales.js';
export class PlanillaCrearSolicitud {

  constructor() {
    this.showTituloAlumno = false;
    this.showTutor = false;
    this.showEmpresa = false;
    
    this.progressValue = 33.3;
    this.progressbarState = 0;

    this.trabajoDeGrado = {
      tituloTG: "",
      modalidad: "E",
    };
    
    this.alumnos = [
      new PlantillaDatosPersonales(),
      new PlantillaDatosPersonales()
    ];
    this.tutor = new PlantillaDatosPersonales();
    this.tutorEmpresarial = new PlantillaDatosPersonales();
    this.empresa = {
      idEmpresa: '',
      nombre: '',
      rif: '',
      direccion: '',
      telefono: ''
    };
  };
  crearSolicitud() {
    this.progressbarState = 0;

    this.trabajoDeGrado.tituloTG = "";
    this.trabajoDeGrado.modalidad = "";
    this.cedulaAlumno = "";
    this.cedulaTutor = "";
    this.nombreEmpresa = "";

    this.showTituloAlumno = true;
    this.showTutor = false;
    this.showEmpresa = false;
    this.showTutorEmpresarial = false;
  };
  tituloAlumnoCompletado() {
    this.showTituloAlumno = false;
    this.showTutor = true;
    this.progressbarState += this.progressValue;
  };
  volverATituloAlumno() {
    this.showTituloAlumno = true;
    this.showTutor = false;
    this.progressbarState -= this.progressValue;
  };
  tutorCompletado() {
    this.showTutor = false;
    this.showEmpresa = true;
    this.progressbarState += this.progressValue;
  };
  volverATutor() {
    this.showTutor = true;
    this.showEmpresa = false;
    this.progressbarState -= this.progressValue
  };
  empresaCompletada(){
    this.showEmpresa = false;
    this.showTutorEmpresarial = true;
    this.progressbarState += this.progressValue;
  };
  volverAEmpresa(){
    this.showEmpresa = true;
    this.showTutorEmpresarial = false;
    this.progressbarState -= this.progressValue;
  };
}