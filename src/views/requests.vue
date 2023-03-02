<script setup>
import Record from "../components/record.vue";
import { ref, reactive, onMounted, onUnmounted } from "vue";
import * as api from '../apiTools.js';

let data = reactive([]);
let dataEmpresas = reactive([]);

let planilla = reactive({
  id_sptg: "",
  titulo: "",
  modalidad: "",
  fechaenvio: "",
  estatus: "",
  id_ta: "",
  id_admin_evaluador: "",
});

let crearSolicitudForm = reactive({
  showTituloAlumno: false,
  showTutor: false,
  showEmpresa: false,

  progressbarState: 0,

  trabajoDeGrado: {
    tituloTG: "",
    modalidad: "",
  },

  cedulaAlumnos: ["", ""],
  cedulaTutor: "",
  idEmpresa: "",

  crearSolicitud() {
    this.showTituloAlumno = true;
    this.showTutor = false;
    this.showEmpresa = false;

    this.progressbarState = 0;

    this.trabajoDeGrado.tituloTG = "";
    this.trabajoDeGrado.modaliad = "";
    this.cedulaAlumno = "";
    this.cedulaTutor = "";
    this.nombreEmpresa = "";
  },
  tituloAlumnoCompletado() {
    this.showTituloAlumno = false;
    this.showTutor = true;
    this.progressbarState += 33.3;
    console.log(this.cedulaAlumnos);
    console.log(this.trabajoDeGrado);
  },
  volverATituloAlumno() {
    this.showTituloAlumno = true;
    this.showTutor = false;
    this.progressbarState -= 33.3;
  },
  tutorCompletado() {
    this.showTutor = false;
    this.showEmpresa = true;
    this.progressbarState += 33.3;
    console.log(this.cedulaTutor);
  },
  volverATutor() {
    this.showTutor = true;
    this.showEmpresa = false;
    this.progressbarState -= 33.3;
    console.log(this.idEmpresa);
  }
});

const showPlanillaUpDe = ref(false);
const showPlanillaCreate = ref(false);

function actionShowPlanillaCrear() {
  showPlanillaUpDe.value = false;
  showPlanillaCreate.value = true;
  crearSolicitudForm.crearSolicitud();
}
function actionShowPlanillaUpDe() {
  showPlanillaUpDe.value = true;
  showPlanillaCreate.value = false;
}
const clickenComponente = async (id) => {
  actionShowPlanillaUpDe();
  const res = await fetch("http://localhost:3000/SPTG/" + id);
  const respuesta = await res.json();
  console.log(respuesta);
  planilla.id_sptg = respuesta.id_sptg;
  planilla.titulo = respuesta.titulo;
  planilla.modalidad = respuesta.modalidad;
  planilla.fechaenvio = respuesta.fechaenvio;
  planilla.estatus = respuesta.estatus;
  planilla.id_ta = respuesta.id_ta;
  planilla.id_admin_evaluador = respuesta.id_admin_evaluador;
};

onMounted(async () => {
  data = await api.obtenerSoliciturdes();
  console.log(data);
  dataEmpresas = await api.obtenerEmpresas();
});
</script>

<template>
  <div class="request">
    <!-- Colocar un nuevo contenedor para colocar el agregado de solicitudes en el la parte de la lista -->
    <h1>Solicitudes de Propuestas de trabajo de grado</h1>
    <div class="container request__container">
      <!-- Colocar un nuevo contenedor para el filtrado -->

      <div class="request__container__display">
        <div class="request__container__display__controllers">
          <button>
            <img src="../assets/imgs/search-circle-outline.svg" />Buscar
            Solicitud
          </button>
          <button>
            <img src="../assets/imgs/cloud-upload-outline.svg" />Cargar
            Solicitud
          </button>
          <button @click="actionShowPlanillaCrear()">
            <img src="../assets/imgs/add-circle-outline.svg" alt="" />Crear
            Planilla
          </button>
        </div>

        <div class="request__container__display__list">
          <Record
            class="request__container__display__list__record"
            v-for="e in data"
            :key="e.id_sptg"
            :titulo="e.titulo"
            :estatus="e.estatus"
            :fechaenvio="e.fechaenvio"
            @click="clickenComponente(e.id_sptg)"
          />
        </div>
      </div>

      <div class="request__container__preview">
        <h2>Visualización del documento de solicitud</h2>
        <form
          class="request__container__preview__form up-de"
          @submit.prevent="submit"
          v-show="showPlanillaUpDe"
        >
          <div class="request__container__preview__form__inputs">
            <p for="">Titulo del Trabajo</p>
            <input type="text" v-model="planilla.titulo" />
            <p for="">Modalidad</p>
            <select name="modalidad" id="">
              <option value="E">Experimental</option>
              <option value="I">Instrumental</option>
            </select>
            <p for="">Fecha de envio</p>
            <input type="date" v-model="planilla.fechaenvio" />
            <p for="">Id del tutor</p>
            <input type="text" v-model="planilla.id_ta" />
            <p for="">Id del evaluador</p>
            <input type="text" v-model="planilla.id_admin_evaluador" />
          </div>
          <div class="actions">
            <button type="submit" @click="api.actualizarPlanilla(planilla, data)">
              Actualizar planilla
            </button>
            <button type="submit" @click="api.eliminarPlanilla(planilla.id_sptg)">
              Eliminar planilla
            </button>
          </div>
        </form>
        <div class="create-state" v-show="showPlanillaCreate">
          <div class="progressbar">
            <div
              class="progressbar--content"
              :style="{ width: crearSolicitudForm.progressbarState + '%' }"
            ></div>
          </div>
          <div class="create-carousel">
            <div class="students" v-show="crearSolicitudForm.showTituloAlumno">
              <form
                class="request__container__preview__form"
                @submit.prevent="submit"
              >
                <div class="request__container__preview__form__inputs">
                  <!-- Trabajo de grado -->
                  <p for="">Titulo del Trabajo</p>
                  <input
                    type="text"
                    placeholder="Bolivar ¿Heroe o Dictador?"
                    v-model="crearSolicitudForm.trabajoDeGrado.tituloTG"
                  />
                  <p for="">Modalidad</p>
                  <select
                    name="modalidad"
                    id=""
                    v-model="crearSolicitudForm.trabajoDeGrado.modalidad"
                  >
                    <option value="E">Experimental</option>
                    <option value="I">Instrumental</option>
                  </select>
                  <!-- Estudiante -->
                  <p for="">Cedula Alumno</p>
                  <input
                    type="number"
                    placeholder="27301846"
                    v-model="crearSolicitudForm.cedulaAlumnos[0]"
                  />
                  <p for="">Nombres</p>
                  <input disabled type="text" placeholder="Wladimir Josué" />
                  <p for="">Apellidos</p>
                  <input disabled type="text" placeholder="Sanvicente Suárez" />
                </div>
                <div class="actions">
                  <button
                    type="submit"
                    @click="crearSolicitudForm.tituloAlumnoCompletado()"
                  >
                    Siguiente
                  </button>
                </div>
              </form>
            </div>
            <div class="tutor" v-show="crearSolicitudForm.showTutor">
              <form
                class="request__container__preview__form"
                @submit.prevent="submit"
              >
                <img
                  src="../assets/imgs/arrow-back-circle-outline.svg"
                  alt=""
                  @click="crearSolicitudForm.volverATituloAlumno"
                />
                <!-- Tutor Academico -->
                <div class="request__container__preview__form__inputs">
                  <p for="">Cédula de Tutor Académico</p>
                  <input
                    type="number"
                    placeholder="27301846"
                    v-model="crearSolicitudForm.cedulaTutor"
                  />
                  <p for="">Nombres</p>
                  <input disabled type="text" placeholder="Wladimir Josué" />
                  <p for="">Apellidos</p>
                  <input disabled type="text" placeholder="Sanvicente Suarez" />
                  <p for="">Años de Experienci a</p>
                  <input disabled type="number" placeholder="4 años" />
                </div>
                <div class="actions">
                  <button
                    type="submit"
                    @click="crearSolicitudForm.tutorCompletado()"
                  >
                    Siguiente
                  </button>
                </div>
              </form>
            </div>
            <div class="company" v-show="crearSolicitudForm.showEmpresa">
              <form
                class="request__container__preview__form"
                @submit.prevent="submit"
              >
                <img
                  src="../assets/imgs/arrow-back-circle-outline.svg"
                  alt=""
                  @click="crearSolicitudForm.volverATutor()"
                />
                <div class="request__container__preview__form__inputs">
                  <!-- Empresa-->
                  <p>Seleccione la empresa:</p>
                  <select
                    name="Empresa"
                    id=""
                    v-model="crearSolicitudForm.idEmpresa"
                  >
                    <option
                      v-for="t in dataEmpresas"
                      :key="t.id_empresa"
                      :value="t.id_empresa"
                    >
                      {{ t.nombre }}
                    </option>
                  </select>
                </div>
                <div class="actions">
                  <button
                    type="submit"
                    @click="api.insertarSolicitudTg(crearSolicitudForm, data)"
                  >
                    Completado!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>