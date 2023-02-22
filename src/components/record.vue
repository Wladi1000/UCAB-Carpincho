<script setup>

    const props = defineProps({
        nombres: String,
        cedula: String,
        correo: String
    });

</script>
<template>
    <div>
        <p>Nombre(s) del alumno(s): {{ props.nombres }}</p>
        <p>Cedula(s) del(os) alumno(s): {{ props.cedula }}</p>
        <p>Correo del alumno: {{ props.correo }}</p>
    </div>
</template>