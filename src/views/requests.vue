<script setup>
    import Record from '../components/record.vue';
    import { reactive, onMounted } from 'vue';
    const data = reactive([]);
    onMounted( async () =>{

        const res = await fetch("http://localhost:3000/Usuarios");
        data.value = await res.json();
        console.log(data);
        //const jalo = await fetch("http://localhost:3000/datosEstudiantes");
        //console.log('holiakjshajkshjkahs' + jalo);
        
        //data.value = data.value.filter(e => e.cedula == 'V-27301846');
    });
        
</script>
<template>
    <div class="request">
        <!-- Colocar un nuevo contenedor para colocar el agregado de solicitudes en el la parte de la lista -->
        <h1>Solicitudes de Propuestas de trabajo de grado</h1>
        
        <div class="container request__container">
            <!-- Colocar un nuevo contenedor para el filtrado -->
            
            <div class="container__list">
                <div class="controllers">
                    <img src="../assets/imgs/icon-find.png">
                    <img src="../assets/imgs/icon-upload.png">
                </div>

                <div class="list request__container__list">
                    <Record class="record request__container__list__record"  
                    v-for="e in data.value" :key="e.id_usuario" 
                    :nombres="e.nombres" :cedula="e.cedula" :correo="e.correo" 
                    />          
                </div>
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