<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import * as api from "../modules/apiTools.js";
import { PlanillaCrearSolicitud } from "../modules/planillaCrearSolicitud.js";

const props = defineProps({
  showPlanillaCreate: Boolean
});

const emit = defineEmits(['actualizarData'])
const crearSolicitudForm = reactive(new PlanillaCrearSolicitud());

let dataEmpresas = reactive([]);
let dataProfesionalesExternos = reactive([])
let idEmpresaSeleccionada = ref(null);

async function buscarEstudiante() {
  const resEstudiante = await api.obtenerIdEstudiante(
    crearSolicitudForm.alumnos[0].cedula
  );
  crearSolicitudForm.alumnos[0].apellidos = resEstudiante.apellidos;
  crearSolicitudForm.alumnos[0].nombres = resEstudiante.nombres;
  crearSolicitudForm.alumnos[0].cedula = resEstudiante.cedula;
}

async function buscarTutor() {
  const resTutor = await api.obtenerIdTutor(crearSolicitudForm.tutor.cedula);
  crearSolicitudForm.tutor.apellidos = resTutor.apellidos;
  crearSolicitudForm.tutor.nombres = resTutor.nombres;
  crearSolicitudForm.tutor.cedula = resTutor.cedula;
}

crearSolicitudForm.empresa.idEmpresa = computed(() => {
  
  if( idEmpresaSeleccionada.value != null ){

    let arregloEmpresa = dataEmpresas.filter( t => t.id_empresa == idEmpresaSeleccionada.value );
  
    crearSolicitudForm.empresa.rif = arregloEmpresa[0].rif;
    crearSolicitudForm.empresa.direccion = arregloEmpresa[0].direccion;
    crearSolicitudForm.empresa.telefono = arregloEmpresa[0].telefono;
  
    return arregloEmpresa[0].id_empresa;
  }
  return '';
});

async function insertarPlanilla(){
  await api.insertarSolicitudTg(crearSolicitudForm);
  emit('actualizarData');
}

onMounted(async () => {
  crearSolicitudForm.crearSolicitud();
  dataEmpresas = await api.obtenerEmpresas();
  dataProfesionalesExternos = await api.obtenerProfesionalesExternos();
});

//------------------------------------------------------>
</script>
<template>
  <div class="create-state" v-show="showPlanillaCreate">
    <div class="progressbar">
      <p>{{ idEmpresaSeleccionada }}</p>
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
              placeholder="Tutilo de Propuesta TG"
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
              placeholder="98765432"
              v-model="crearSolicitudForm.alumnos[0].cedula"
            />
            <p for="">Nombres</p>
            <input
              disabled
              type="text"
              v-model="crearSolicitudForm.alumnos[0].nombres"
            />
            <p for="">Apellidos</p>
            <input
              disabled
              type="text"
              v-model="crearSolicitudForm.alumnos[0].apellidos"
            />
          </div>
          <div class="actions">
            <button
              style="display: none"
              type="submit "
              @click="buscarEstudiante()"
            ></button>

            <button
              :disabled="
                crearSolicitudForm.alumnos[0].nombres == '' ||
                crearSolicitudForm.trabajoDeGrado.modalidad == '' ||
                crearSolicitudForm.trabajoDeGrado.tituloTG == ''
                  ? true
                  : false
              "
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
              placeholder="98765432"
              v-model="crearSolicitudForm.tutor.cedula"
            />
            <p for="">Nombres</p>
            <input
              disabled
              type="text"
              v-model="crearSolicitudForm.tutor.nombres"
            />
            <p for="">Apellidos</p>
            <input
              disabled
              type="text"
              v-model="crearSolicitudForm.tutor.apellidos"
            />
            <p for="">Años de Experienci a</p>
            <input disabled type="number" placeholder="4 años" />
          </div>
          <div class="actions">
            <button
              style="display: none"
              type="submit "
              @click="buscarTutor()"
            ></button>
            <button
              type="submit"
              :disabled="crearSolicitudForm.tutor.nombres == '' ? true : false"
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
            <select name="Empresa" id="" v-model="idEmpresaSeleccionada">
              <option
                v-for="t in dataEmpresas"
                :key="t.id_empresa"
                :value="t.id_empresa"
              >
                {{ t.nombre }}
              </option>
            </select>
            <input
              type="text"
              disabled
              v-model="crearSolicitudForm.empresa.rif"
              placeholder="rif"
            />
            <input
              type="text"
              disabled
              v-model="crearSolicitudForm.empresa.direccion"
              placeholder="direccion"
            />
            <input
              type="text"
              disabled
              v-model="crearSolicitudForm.empresa.telefono"
              placeholder="telefono"
            />
            <select v-show="crearSolicitudForm.trabajoDeGrado.modalidad != 'I'? false: true" name="ProfesionalExterno" id="">
              <option
                v-for="t in dataProfesionalesExternos"
                :key="t.id_profesionale"
                :value="t.id_profesionale"
              >
                {{ t.id_profesionale }}
              </option>
            </select>
          </div>
          <div class="actions">
            <button
              type="submit"
              :disabled="crearSolicitudForm.empresa.idEmpresa == -1 ? true : false"
              @click="insertarPlanilla()"
            >
              Completado!
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>