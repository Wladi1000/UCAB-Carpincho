<script setup>
  import Navbar from './components/navbar.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view id="router" class="router"></router-view>
  </div>
</template>