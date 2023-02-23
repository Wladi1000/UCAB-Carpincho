<script setup>

    import { ref } from 'vue';

    const criterios = ref([]);
    const newCriterio = ref('');
    let id = 0;

    const addCriterio = () => { 
        criterios.value.push( {id: id++, nombre: newCriterio.value})
        newCriterio.value = '';
    }

    function removeCriterio(todo) {
        criterios.value = criterios.value.filter((t) => t !== todo)
    }
</script>
<template>
    <div class="planilla">
        <div>
            <h2>Tema propuesto:</h2>
            <labe>este es un tema propuesto</labe>
        </div>
        <div>
            <h2>Organizacion</h2>
            <label for="">Esto es una organizacion</label>
        </div>
        <div>
            <h2>Criterios de evaliacion: </h2>
            <form @submit.prevent="addCriterio">
                <input v-model="newCriterio">
                <button>Add Criterio</button>    
            </form>
            <ul>
                <li v-for="criterio in criterios" :key="criterio.id">
                    <p>{{ criterio.nombre }}</p>
                    <button @click="removeCriterio(criterio)">X</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
    .planilla{
        padding: 15px;
        width: 500px;
        background-color: #D9D9D9;
    }
    .planilla h2{
        margin: 10px 0;
    }
    .planilla div{
        display:flex;
        flex-direction: column;
    }
    label, button{
        margin: 15px 0;
    }
</style>