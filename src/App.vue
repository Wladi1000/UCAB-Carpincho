<script setup>
  import Navbar from './components/navbar.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view class="router"></router-view>
  </div>
</template>