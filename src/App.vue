<script setup>
  import Navbar from './components/navbar.vue';
</script>

<template>
  <Navbar />
  <router-view id="router" class="router"></router-view>
</template>