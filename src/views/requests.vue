<script setup>
    import Record from '../components/record.vue';
    import { reactive, onMounted } from 'vue';
    const data = reactive([]);
    onMounted( async () =>{

        const res = await fetch("http://localhost:3000/Usuarios");
        //const jalo = await fetch("http://localhost:3000/datosEstudiantes");
        data.value = await res.json();
        //console.log('holiakjshajkshjkahs' + jalo);
        
        //data.value = data.value.filter(e => e.cedula == 'V-27301846');
        console.log(data);
    });
        
</script>
<template>
    <div class="request">
        <h1>Solicitudes de Propuestas de trabajo de grado</h1>
        
        <div class="container request__container">
            <div class="list request__container__list">
                <Record class="record request__container__list__record"  
                    v-for="e in data.value" :key="e.id_usuario" 
                    :nombres="e.nombres" :cedula="e.cedula" :correo="e.correo" 
                />          
            </div>
            <div class="preview request__container__preview">
                <h2>Visualizacion del documento de solicitud</h2>
                <p>Esto es un documento de solicitud de trabajos de grado para </p>
                <div class="request__container__preview__inputs">
                    <label for="">Nombre:  </label>
                    <input type="text">
                    <label for="">Titutlo del Trabajo  </label>
                    <input type="text">
                </div>
            </div>
        </div>
    </div>
</template>