<script setup lang="ts">
import MoneyGraph from "@/components/MoneyGraph.vue";
import { ref, onMounted } from "vue";

const showTitle = ref(false);
const showContent = ref(false);

onMounted(() => {
  // Show title immediately with slow fade-in
  setTimeout(() => {
    showTitle.value = true;
  }, 100);

  // Delay showing the catchphrase until title has faded in
  setTimeout(() => {
    showContent.value = true;
  }, 3500);
});
</script>

<template>
  <div class="home">
    <h1 class="title" :class="{ visible: showTitle }">FIRMAET</h1>
    <MoneyGraph />
    <a
      href="https://www.youtube.com/watch?v=THt5u-i2d9k&autoplay=1"
      target="_blank"
      rel="noopener noreferrer"
      class="catchphrase-link"
      :class="{ clickable: showContent }"
    >
      <p class="catchphrase" :class="{ visible: showContent }">
        Fordi coke og ludere godt kan trækkes fra i skat
      </p>
    </a>
    <!-- SEO Content -->
    <div class="seo-content">
      <h2>Gunløg Firmaet - Den Eksklusive Milliardærklub</h2>
      <p>
        Velkommen til Gunløg Firmaet, også kendt som Gunløg Firma, Firmaet eller
        simpelthen Firma. Vi er en eksklusiv sammenslutning af Danmarks yngste
        og mest succesfulde milliardærer.
      </p>
      <p>
        Hvert år afholder vi vores legendariske gunløg - en tradition der går
        tilbage til firmaets grundlæggelse. Gunløg er ikke bare en begivenhed,
        det er en livsstil.
      </p>
      <p>
        Som medlem af Gunløg Firmaet forpligter man sig til at følge vores
        strenge regler og betale bøder ved overtrædelser. Alt sammen for at
        sikre, at vores årlige gunløg bliver en uforglemmelig oplevelse.
      </p>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px); /* Account for navbar and footer */
  background-color: black;
  color: #ffb22c;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.title {
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: bold;
  font-family: Georgia, serif;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 30px;
  opacity: 0;
  transition: opacity 2.5s ease-in-out;
  text-align: center;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, #ffd700, #ffa500, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
}

.title.visible {
  opacity: 1;
}

.catchphrase-link {
  text-decoration: none;
  pointer-events: none;
  transition: all 0.3s ease;
}

.catchphrase-link.clickable {
  pointer-events: auto;
}

.catchphrase-link:hover .catchphrase {
  color: #ffd700;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  transform: scale(1.05);
}

.catchphrase {
  font-size: 1.6em;
  margin-top: 40px;
  opacity: 0;
  transition: all 0.3s ease;
  text-align: center;
  font-style: italic;
  letter-spacing: 1px;
  padding-top: 20px;
  color: #ffb22c;
  margin-bottom: 0;
}

.catchphrase.visible {
  opacity: 1;
  transition: opacity 1s ease-in-out, color 0.3s ease, transform 0.3s ease;
}

.seo-content {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

@media (max-width: 600px) {
  .home {
    min-height: auto;
    padding: 20px 10px;
  }

  .title {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .catchphrase {
    font-size: 1.2em;
    padding-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
