<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/AppFooter.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
@import "./assets/styles/theme.css";

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex: 1;
  overflow: auto;
}
</style>
