<script setup>
import Record from "../components/record.vue";
import PlanillaSolicitud from "../components/planillaSolicitud.vue";
import { ref, reactive, onMounted } from "vue";
const data = reactive([]);

let planilla = reactive({
  id_sptg: "",
  titulo: "",
  modalidad: "",
  fechaenvio: "",
  estatus: "",
  id_ta: "",
  id_admin_evaluador: "",
});

onMounted(async () => {
  const res = await fetch("http://localhost:3000/datosEstudiantes");
  const sptg = await res.json();
  data.value = sptg;
  console.log(sptg);
});

let mostrarPlanilla = ref(false);

function swapMostrarPlanilla() {
  mostrarPlanilla.value = !mostrarPlanilla.value;
  console.log(mostrarPlanilla.value);
}

const clickenComponente = async (id) => {
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

const actualizarPlanilla = async () => {
  const res = await fetch("http://localhost:3000/SPTG/" + planilla.id_sptg, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: planilla.titulo,
      modalidad: planilla.modalidad,
      fechaenvio: planilla.fechaenvio,
      id_ta: planilla.id_ta,
      id_admin_evaluador: planilla.id_admin_evaluador,
    }),
  });
  const actualizacion = await res.json();

  const resi = await fetch("http://localhost:3000/datosEstudiantes");
  const sptg = await resi.json();
  data.value = sptg;

  planilla.estatus = "";
  planilla.fechaenvio = "";
  planilla.id_admin_evaluador = "";
  planilla.id_sptg = "";
  planilla.id_ta = "";
  planilla.modalidad = "";
  planilla.titulo = "";

  console.log(actualizacion);
};
const eliminarPlanilla = async () => {
  //Aqui el componente se tiene que renderizar nuevamente para cargar los cambios dentro de la base de datos
  const res = await fetch("http://localhost:3000/SPTG/" + planilla.id_sptg, {
    method: "DELETE",
  });
  const respuesta = await res.json();
  console.log(respuesta);
  return;
};
</script>
<template>
  <div class="request">
    <!-- Colocar un nuevo contenedor para colocar el agregado de solicitudes en el la parte de la lista -->
    <h1>Solicitudes de Propuestas de trabajo de grado</h1>
    <!--<PlanillaSolicitud 
            v-show="mostrarPlanilla" :mostrar="mostrarPlanilla" 
            @responde = "( msg ) => mostrarPlanilla = msg"
            /> -->
    <div class="container request__container">
      <!-- Colocar un nuevo contenedor para el filtrado -->

      <div class="request__container__display">
        <div class="request__container__display__controllers">
          <button><img src="../assets/imgs/icon-find.png" /></button>
          <button><img src="../assets/imgs/icon-upload.png" /></button>
          <button @click="swapMostrarPlanilla()">+</button>
        </div>

        <div class="request__container__display__list">
          <Record
            class="request__container__display__list__record"
            v-for="e in data.value"
            :key="e.id_sptg"
            :titulo="e.titulo"
            :estatus="e.estatus"
            :fechaenvio="e.fechaenvio"
            @click="clickenComponente(e.id_sptg)"
          />
        </div>
      </div>

      <div class="request__container__preview">
        <h2>Visualizacion del documento de solicitud</h2>
        <form @submit.prevent="submit">
          <div class="request__container__preview__inputs">
            <p for="">Id: </p>
            <input type="text" v-model="planilla.id_sptg" />
            <p for="">Titulo del Trabajo </p>
            <input type="text" v-model="planilla.titulo" />
            <p for="">Modalidad </p>
            <input type="text" v-model="planilla.modalidad" />
            <p for="">Fecha de envio </p>
            <input type="text" v-model="planilla.fechaenvio" />
            <p for="">Id del tutor </p>
            <input type="text" v-model="planilla.id_ta" />
            <p for="">Id del evaluador </p>
            <input type="text" v-model="planilla.id_admin_evaluador" />
          </div>
          <button type="submit" v-on:click="actualizarPlanilla">
            Actualizar planilla
          </button>
          <button type="submit" v-on:click="eliminarPlanilla">
            Eliminar planilla
          </button>
        </form>
      </div>
    </div>
  </div>
</template>