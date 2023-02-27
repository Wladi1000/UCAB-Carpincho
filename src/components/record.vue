<script setup>

    const props = defineProps({
        titulo: String,
        modalidad: String,
        fechaenvio: String,
        estatus: String,
        id_ta: Number,
        id_admin_evaluador: Number
    });

</script>
<template>
    <div>
        <p>Titulo de propuesta: {{ props.titulo }}</p>
        <p>estatus: {{ props.estatus }}</p>
        <p>fechaenvio: {{ props.fechaenvio }}</p>
    </div>
</template>