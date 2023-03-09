<script setup>
import Record from "../components/record.vue";
import crearSolicitud from "../components/planillaSolicitudCrear.vue";
import { ref, reactive, onMounted, computed } from "vue";
import * as api from "../modules/apiTools.js";

let data = reactive([]);

// Objeto para guardar los datos de la planilla que se esta leyendo
let planilla = reactive({
  id_sptg: "",
  titulo: "",
  modalidad: "",
  fechaenvio: "",
  estatus: "",
  id_ta: "",
  id_admin_evaluador: "",
});

const showPlanillaUpDe = ref(false);
const showPlanillaCreate = ref(false);
const actualizarLista = ref(false);

function actionShowPlanillaCrear() {
  showPlanillaUpDe.value = false;
  showPlanillaCreate.value = true;
}
function actionShowPlanillaUpDe() {
  showPlanillaUpDe.value = true;
  showPlanillaCreate.value = false;
}
const clickenComponente = async (id) => {
  actionShowPlanillaUpDe();
  const respuesta = await api.obtenerSolicitudById(id)
  planilla.id_sptg = respuesta.id_sptg;
  planilla.titulo = respuesta.titulo;
  planilla.modalidad = respuesta.modalidad;
  planilla.fechaenvio = respuesta.fechaenvio;
  planilla.estatus = respuesta.estatus;
  planilla.id_ta = respuesta.id_ta;
  planilla.id_admin_evaluador = respuesta.id_admin_evaluador;
};

async function actualizarPlanilla(){
  await api.actualizarPlanilla(planilla, data.value);
  data.value = await api.obtenerSolicitudes();
}

actualizarLista.value = computed( async () =>{
  let falso = actualizarLista.value
  console.log(actualizarLista.value);
  await actualizarPlanilla();
  return actualizarLista.value = false; 
});

onMounted(async () => {
  data.value = await api.obtenerSolicitudes();
});
//------------------------------------------------------>
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
          <button @click="actionShowPlanillaCrear()">
            <img src="../assets/imgs/add-circle-outline.svg" alt="" />Crear
            Planilla
          </button>
        </div>

        <div class="request__container__display__list">
          <Record
            class="request__container__display__list__record"
            v-for="e in data.value"
            :key="e.id_sptg"
            :titulo="e.titulo"
            :modalidad="e.modalidad"
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
            <button
              type="submit"
              @click=" actualizarPlanilla()"
            >
              Actualizar planilla
            </button>
            <button
              @click="api.eliminarPlanilla(planilla.id_sptg)"
            >
              Eliminar planilla
            </button>
          </div>
        </form>

        <crearSolicitud :showPlanillaCreate="showPlanillaCreate" @actualizarData="()=> actualizarLista = true" />
      </div>
    </div>
  </div>
</template>