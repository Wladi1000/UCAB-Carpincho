<script setup>
import { ref, reactive, onMounted } from "vue";
import * as api from "../modules/apiTools.js";
import { PropuestaTg } from "../modules/planillaPropuesta.js";

let dataPropuestas = reactive([]);
let dataPorRevisores = reactive([]);
let dataProfesores = reactive([]);

let formularioPropuesta = ref( new PropuestaTg );
console.log(formularioPropuesta);

const clickenComponente = async (id) => {
  formularioPropuesta.value = await api.obtenerPropuestaById(id);
  console.log(formularioPropuesta.value);
};

const rechazarPropuesta = () =>{
  api.rechazarPropuesta( formularioPropuesta.value.id_propuesta, formularioPropuesta.value.id_solicitud );
  formularioPropuesta.value.setPropuestaRechazada();
  alert('Rechazado con tristeza');
};

onMounted(async () => {
  dataPropuestas.value = await api.obtenerPropuestas();
});
</script>
<template>
  <div class="request">
    <h1>Designacion de tutor revisor</h1>
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
            v-for="t in dataPropuestas.value"
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
            <div
              class="request__container__preview__form up-de"
            >
              <div class="request__container__preview__form__inputs">
                <p>Titulo del Trabajo</p>
                <input disabled type="text" v-model="formularioPropuesta.titulo" />
                <p>Modalidad</p>
                <input disabled type="text" v-model="formularioPropuesta.modalidad">
                <p>Fecha de envio</p>
                <input disabled type="date" v-model="formularioPropuesta.fecha" />
                <p>Estatus</p>
                <input disabled type="text" v-model="formularioPropuesta.estatus" />
                <p>tutor</p>
                <input disabled type="text" v-model="formularioPropuesta.tutor_academico.nombres"/>
                <input disabled type="text" v-model="formularioPropuesta.tutor_academico.apellidos"/>
              </div>
              <div class="actions">
                <button class="cancel"
                @click="rechazarPropuesta()"
                >Rechazar</button>
                <button type="submit" class="login__form__btn succes">
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