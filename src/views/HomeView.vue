<script setup lang="ts">
// No additional logic needed
</script>

<template>
  <div class="home">
    <h1>Firmaet</h1>
    <p class="catchphrase">Fordi coke og ludere godt kan trækkes fra i skat</p>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: black;
  color: #ffb22c;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden; /* Prevent scrolling specifically on home page */
}

h1 {
  font-size: 4em; /* Increased font size for Firmaet */
}

.catchphrase {
  font-size: 1.6em;
  margin-top: 20px;
}
</style>
