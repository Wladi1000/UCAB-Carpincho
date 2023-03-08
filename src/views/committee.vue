<script setup>
import { ref, reactive, onMounted } from "vue";
import * as api from "../modules/apiTools.js";
import { PropuestaTg } from "../modules/planillaPropuesta.js";

let dataPropuestas = reactive([]);
let dataPorRevisores = reactive([]);
let dataProfesores = reactive([]);

//Lista de comites en bdd
let comites;

let formularioPropuesta = ref( new PropuestaTg() );
console.log(formularioPropuesta);

const clickenComponente = async (id) => {
  formularioPropuesta.value = await api.obtenerPropuestaById(id);
  console.log(formularioPropuesta.value);
};

const rechazarPropuestaComite = async() =>{
  api.rechazarPropuesta( formularioPropuesta.value.id_propuesta, formularioPropuesta.value.comite_evaluador.id );
  console.log(formularioPropuesta.value);
  //console.log(formularioPropuesta.value.setPropuestaRechazada());
  //formularioPropuesta.value.setPropuestaRechazada();
  alert('Rechazado con tristeza');
  dataPropuestas.value = await api.obtenerPropuestas();
};

const aprobarPropuestaComite = async () =>{
  api.aprobarPropuestaComite( formularioPropuesta.value.id_propuesta, formularioPropuesta.value.comite_evaluador.id )
  console.log(formularioPropuesta.value);
  alert('Propusta aprobada con exito por comite: ' + formularioPropuesta.value.comite_evaluador.id);
  dataPropuestas.value = await api.obtenerPropuestas();
};

onMounted(async () => {
  dataPropuestas.value = await api.obtenerPropuestas();
  comites = await api.obtenerComites();
  console.log(comites);
});
</script>
<template>
  <div class="request">
    <h1>Comite de escuela</h1>
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
                <select name="comites" id="" v-model="formularioPropuesta.comite_evaluador.id">
                  <option
                  v-for="c in comites"
                  :key="c.id_ctg" 
                  :value="c.id_ctg"
                >
                {{ c.id_ctg }}
                </option>
                </select>
              </div>
              <div class="actions">
                <button class="cancel"
                @click="rechazarPropuestaComite()"
                >Rechazar</button>
                <button class="login__form__btn succes"
                @click="aprobarPropuestaComite()"
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