<script setup lang="ts">
import { ref } from "vue";

const members = ref([
  {
    id: 1,
    name: "Albert Mikkelsen",
    title: "Kassemester",
    note: "Vogter af bødekassen",
  },
  {
    id: 2,
    name: "Andreas Nørby",
    title: "Festens Fyrste",
    note: "Ansvarlig for musikken... og uansvarlig for alt andet",
  },
  {
    id: 3,
    name: "Andreas R. Knudsen",
    title: "Protokolfører",
    note: "Dokumenterer alle forseelser med stor iver",
  },
  {
    id: 4,
    name: "Benjamin B. Binzer",
    title: "Øl-Ambassadør",
    note: "Ekspert i ølsmagning og fremskaffelse af forsyninger",
  },
  {
    id: 5,
    name: "Daniel P. Pedersen",
    title: "Stormester af Kano-booking",
    note: "Har aldrig mistet en kano... endnu",
  },
  {
    id: 6,
    name: "Frederik V. Svane",
    title: "Overlevelsesekspert",
    note: "Kan starte ild med to øl og en pind",
  },
  {
    id: 7,
    name: "Jens B. Assenholt",
    title: "Hofnarren",
    note: "Specialiseret i at undgå bøder gennem humor",
  },
  {
    id: 8,
    name: "Kristian R. Knudsen",
    title: "Kongen af Undskyldninger",
    note: "Har aldrig været sent ude... ifølge ham selv",
  },
  {
    id: 9,
    name: "Laurits B. Sommer",
    title: "Grandmaster Flash",
    note: "Vogter over gruppens dyre elektronik",
  },
  {
    id: 10,
    name: "Mathias G. Nielsen",
    title: "Bødernes Herre",
    note: "Opfinder af mindst 5 nye bøder årligt",
  },
  {
    id: 11,
    name: "Nicklas B. Christensen",
    title: "Transportminister",
    note: "Laver magiske kørselsplaner der aldrig holder",
  },
  {
    id: 12,
    name: "Simon T. Bechmann",
    title: "Ceremonimester",
    note: "Fremragende til taler efter midnat",
  },
  {
    id: 13,
    name: "Valdemar D. Perdersen",
    title: "Grillkongen",
    note: "Laver mad der er værd at få bøde for",
  },
  {
    id: 14,
    name: "William Børgesen",
    title: "Dokumentarist",
    note: "Tager billeder som alle fortryder dagen efter",
  },
]);
</script>

<template>
  <div class="medlemmer-container">
    <h1 class="elegant-title">Medlemmer</h1>
    <p class="intro-text">
      Hver person på denne liste ejer aktier og Rolex for mere end 18 mia. dkk.
    </p>

    <div class="members-grid">
      <div v-for="member in members" :key="member.id" class="member-box">
        <div class="member-content">
          <div class="member-name">{{ member.name }}</div>
          <div class="member-title">{{ member.title }}</div>
          <div v-if="member.note" class="member-note">{{ member.note }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.medlemmer-container {
  background-color: black;
  color: #ffb22c;
  /* Updated gold color */
  font-family: "Times New Roman", Times, serif;
  padding: 20px;
  text-align: center;
  min-height: 100vh;
}

.elegant-title {
  font-family: "Lucida Calligraphy", cursive, serif;
  font-size: 2rem;
  margin: 1.5rem 0;
  color: #ffb22c;
  /* Updated gold color */
  font-weight: normal;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
}

.members-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.member-box {
  border: 1px solid #ffb22c;
  /* Updated gold color */
  border-radius: 0;
  padding: 1rem;
  text-align: center;
  /* Center all text */
}

.member-name {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-family: "Lucida Calligraphy", cursive, serif;
}

.member-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.member-note {
  font-style: italic;
  font-size: 0.9rem;
  opacity: 0.8;
}

.copyright {
  margin-top: 3rem;
  font-size: 0.8rem;
  font-style: italic;
}

@media (max-width: 600px) {
  .elegant-title {
    font-size: 1.5rem;
  }

  .members-grid {
    padding: 0 10px;
  }
}
</style>
