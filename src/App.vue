<script setup>
  import { onMounted } from "vue";
  
  import Navbar from './components/navbar.vue';

  console.log("hola");

  onMounted( async () =>{

    console.log("estamos montados");
    
    const res = await fetch("http://localhost:3000/Usuarios");
    const data = await res.json();
    console.log(data);

  });
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view class="router"></router-view>
  </div>
</template>