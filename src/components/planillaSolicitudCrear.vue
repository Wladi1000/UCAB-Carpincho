<script setup>
import { reactive, onMounted } from "vue";
import * as api from "../apiTools.js";

const props = defineProps({
  showPlanillaCreate: Boolean,
});

let dataEmpresas = reactive([]);

const crearSolicitudForm = reactive({
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
    this.trabajoDeGrado.modalidad = "";
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
  },
});

onMounted(async () => {
  crearSolicitudForm.crearSolicitud();
  dataEmpresas = await api.obtenerEmpresas();
});
</script>
<template>
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
            <button type="submit" @click="crearSolicitudForm.tutorCompletado()">
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
            <select name="Empresa" id="" v-model="crearSolicitudForm.idEmpresa">
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
</template>