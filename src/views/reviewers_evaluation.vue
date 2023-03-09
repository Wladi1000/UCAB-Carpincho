<script setup>
import { ref, reactive, onMounted } from "vue";
import * as api from "../modules/apiTools.js";
import { PropuestaTg } from "../modules/planillaPropuesta.js";
import { PlanillaDesignacionRevisor } from '../modules/planillaDesignacionRevisor.js';

let dataPropuestasConRevisorAsignado = reactive([]);

//control de formulario de designacion
let showDesignarTutor = ref(false);
let revisor = ref('');

//Lista de comites en bdd
let profesoresADesignar = ref([]);
let formularioPropuesta = ref(new PropuestaTg());

const clickenComponente = async (id) => {
  formularioPropuesta.value = await api.obtenerPropuestaById(id);
  console.log(formularioPropuesta.value);
  revisor.value = await api.obtenerProfesorById(formularioPropuesta.value.id_profesor_revisor)
  console.log(revisor.value);
};

const rechazarPropuesta = async () => {
  await api.rechazarPropuestaRevisor( formularioPropuesta.value.id_propuesta )
  dataPropuestasConRevisorAsignado.value = await api.obtenerPropuestaConRevisorAsignado();
  alert("Rechazada por Revisor");
};

const aprobarPropuesta = async () => {
  await api.aprobarPropuestaRevisor( formularioPropuesta.value.id_propuesta );
  dataPropuestasConRevisorAsignado.value = await api.obtenerPropuestaConRevisorAsignado();
  alert("Aprobada por Revisor");
};

const hola = ()=>{ 
  console.log(formularioPropuesta.value.revisor);  
};

onMounted(async () => {
  dataPropuestasConRevisorAsignado.value = await api.obtenerPropuestaConRevisorAsignado();
});
</script>
<template>
  <div class="request">
    <h1>Evaluacion de Revisor</h1>
    <div class="committe__container">
      <div class="committe__container__display">
        <div class="committe__container__display__controllers">
          <button>
            <img src="../assets/imgs/search-circle-outline.svg" />Buscar
            Solicitud
          </button>
        </div>
        <div class="committe__container__display__list">
          <!-- Aqui va el registro para las propuestas de trabajo de grado -->
          <div
            class="request__container__display__list__record"
            v-for="t in dataPropuestasConRevisorAsignado.value"
            :key="t.id_ptg"
            @click="clickenComponente(t.id_ptg)"
          >
            <p>{{ t.id_ptg }}</p>
            <p>{{ t.fecha_entrega }}</p>
            <p>{{ t.estatus }}</p>
          </div>
        </div>
      </div>
      <div class="committe__container__preview">
        <h2>Visualización del documento de solicitud</h2>
        <form action="" class="committe__container__preview__form"></form>
        <div class="create-state">
          <div class="progressbar">
            <div class="progressbar--content"></div>
          </div>
          <div class="create-carousel">
            <h2>Visualización del documento de solicitud</h2>
            <div class="request__container__preview__form up-de">
              <div class="request__container__preview__form__inputs">
                <p>Titulo del Trabajo</p>
                <input
                  disabled
                  type="text"
                  v-model="formularioPropuesta.titulo"
                />
                <p>Modalidad</p>
                <input
                  disabled
                  type="text"
                  v-model="formularioPropuesta.modalidad"
                />
                <p>Revisor</p>
                <input 
                disabled 
                type="text"
                v-model="revisor.nombres"
                >
                <input 
                disabled 
                type="text"
                v-model="revisor.apellidos"
                >
                <input 
                disabled 
                type="text"
                v-model="revisor.cedula"
                >

              </div>

              <div class="actions">
                <button class="cancel"
                @click="rechazarPropuesta()"
                >Rechazar</button>
                <button class="login__form__btn succes"
                @click="aprobarPropuesta()"
                >
                  Aceptar
                </button>
              </div>
            </div>
            <!-- aqui van los formularios necesarios para el proceso de crear una asignacion de revisor a la propuesta -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>