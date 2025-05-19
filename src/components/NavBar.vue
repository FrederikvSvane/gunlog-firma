<script setup lang="ts">
// No additional logic needed for this component
// The component name is automatically inferred from the filename
</script>

<template>
  <nav class="navbar">
    <div class="nav-section left">
      <router-link to="/bodekassen">Bødekassen</router-link>
    </div>

    <div class="nav-section center">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Firmaet Logo" class="logo" />
      </router-link>
    </div>

    <div class="nav-section right">
      <router-link to="/medlemmer">Medlemmer</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: black;
  color: #ffe002;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  flex-shrink: 0;
}

.nav-section {
  flex: 1;
  display: flex;
  align-items: center;
}

.left {
  justify-content: flex-start;
}

.center {
  justify-content: center;
}

.right {
  justify-content: flex-end;
}

.logo {
  height: 50px;
  cursor: pointer;
}

a {
  color: #ffb22c;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* New style for navigation text links */
.left a,
.right a {
  font-size: 22px; /* Adjust size as needed */
}
</style>
