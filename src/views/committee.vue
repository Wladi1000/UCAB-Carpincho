<script setup>
import PlanillaRevisor from "../components/planillaRevisor.vue";
import { reactive, onMounted } from 'vue';
import * as api from "../modules/apiTools.js";

let dataPropuestas = reactive([]);
let dataPorRevisores = reactive([]);
let dataProfesores = reactive ([]);

onMounted(async () =>{
  
  dataPropuestas = await api.obtenerPropuestas();
  console.log(dataPropuestas);

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
          <button>
            <img src="../assets/imgs/cloud-upload-outline.svg" />Cargar
            Solicitud
          </button>
          <button>
            <img src="../assets/imgs/add-circle-outline.svg" alt="" />Crear
            Planilla
          </button>
        </div>
        <div class="committe__container__display__list">
          <!-- Aqui va el registro para las propuestas de trabajo de grado -->
          <div
          class="request__container__display__list__record"
          v-for="t in dataPropuestas" :key="t.id_ptg"
          >
            <p>{{ t.id_ptg }}</p>
            <p>{{ t.fecha_entrega }}</p>
            <p>{{ t.estatus }}</p>
          </div>  
        </div>
      </div>
      <div class="committe__container__preview">
        <h2>Visualización del documento de solicitud</h2>
        <form action="" class="committe__container__preview__form">

        </form>
        <div class="create-state">
          <div class="progressbar">
            <div class="progressbar--content"></div>
          </div>
          <div class="create-carousel">
            <!-- aqui van los formularios necesarios para el proceso de crear una asignacion de revisor a la propuesta -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>