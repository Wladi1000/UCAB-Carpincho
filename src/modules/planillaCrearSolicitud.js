import { PlantillaDatosPersonales } from './plantillasDatosPersonales.js';
export class PlanillaCrearSolicitud {

  constructor() {
    this.showTituloAlumno = false;
    this.showTutor = false;
    this.showEmpresa = false;

    this.progressbarState = 0;

    this.trabajoDeGrado = {
      tituloTG: "",
      modalidad: "",
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
    this.progressbarState += 33.3;
  };
  volverATituloAlumno() {
    this.showTituloAlumno = true;
    this.showTutor = false;
    this.progressbarState -= 33.3;
  };
  tutorCompletado() {
    this.showTutor = false;
    this.showEmpresa = true;
    this.progressbarState += 33.3;
  };
  volverATutor() {
    this.showTutor = true;
    this.showEmpresa = false;
    this.progressbarState -= 33.3;
  };
  empresaCompletada(){
    this.showEmpresa = false;
    this.showTutorEmpresarial = true;
    this.progressbarState += 33;
  };
  volverAEmpresa(){
    this.showEmpresa = true;
    this.showTutorEmpresarial = false;
    this.progressbarState -= 33;
  };
}