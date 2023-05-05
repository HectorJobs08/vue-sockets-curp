<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="layout">
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
