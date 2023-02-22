<script setup>
    import Record from '../components/record.vue';
    import { reactive, onMounted } from 'vue';
    const data = reactive([]);
    onMounted( async () =>{

        const res = await fetch("http://localhost:3000/Usuarios");
        data.value = await res.json();
        console.log(data);
    });
        
</script>
<template>
    <div class="request">
        <h1>Solicitudes de Propuestas de trabajo de grado</h1>
        <div class="container request__container">
            <Record class="record request__containe__record"  
                v-for="e in data.value" :key="e.id_usuario" 
                :nombres="e.nombres" :cedula="e.cedula" :correo="e.correo" 
            />
            
        </div>
    </div>
</template>