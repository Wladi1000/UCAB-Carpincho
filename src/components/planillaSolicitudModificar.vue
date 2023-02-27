<script setup>
const props = defineProps({
  actualizarPlanilla: Function,
  eliminarPlanilla: Function,
});

/*const actualizarPlanilla = async () => {
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
};*/
</script>
<template>
  <form @submit.prevent="submit">
    <div class="request__container__preview__inputs">
      <p for="">Id:</p>
      <input disabled type="number" v-model="planilla.id_sptg" />
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
      <button type="submit" v-on:click="actualizarPlanilla">
        Actualizar planilla
      </button>
      <button type="submit" v-on:click="eliminarPlanilla">
        Eliminar planilla
      </button>
    </div>
  </form>
</template>