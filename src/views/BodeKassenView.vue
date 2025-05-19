<script setup lang="ts">
// No additional logic needed
</script>

<template>
  <div class="bodekassen-container">
    <h1 class="elegant-title">Bødekasse Regler</h1>

    <div class="intro-text">
      <p>
        Dette regelsæt er oprettet for at sikre, at alle medlemmer overholder
        aftaler og forpligtelser i forbindelse med fællesarrangementer, møder og
        sociale begivenheder. Alle medlemmer er forpligtet til at følge disse
        regler, og bøderne indsamles i en fælles bødekasse, som går til alkohol
        til næste års gunløg.
      </p>
      <p>
        Hver mand har ret til at kende den samlede bødekassens aktuelle beløb,
        udskyde en betaling til starten af næste måned og anke en bøde. Anken
        godkendes hvis flertallet af de øvrige medlemmer er enige i anken. Nye
        bøderegler kan laves ved enstemmig afstemning. Ved manglede betaling
        forekommer en ugenlig-rente på 5 %, medmindre andet er aftalt.
      </p>
    </div>

    <h2 class="elegant-subtitle">Bøder og Regler</h2>

    <div class="rules-container">
      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">
            Medbringer uanmeldt gæst til fællesarrangementer
          </div>
          <div class="rule-note">Medmindre en anden knalder din gæst</div>
          <div class="rule-fine">Bøde: 50 kr.</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">
            Bøde for ikke at deltage alle dage på gunløg, når det er aftalt
          </div>
          <div class="rule-note">
            Hvis der er lavet en aftale inden kanoerne er booket
          </div>
          <div class="rule-fine">Bøde: 25 kr. pr. dag</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">
            Bøde for ikke at deltage alle dage på gunløg, når det er aftalt
          </div>
          <div class="rule-note">
            Hvis der ikke er lavet en aftale inden kanoerne er booket
          </div>
          <div class="rule-fine">Bøde: 100 kr. pr. dag</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">Oranere til fællesarrangementer</div>
          <div class="rule-note">Forbeholdt Nørby. Håber vi...</div>
          <div class="rule-fine">Bøde: 100 kr.</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">
            Skide i en radius af 5 meter fra spise- eller sovesteder
          </div>
          <div class="rule-note">Toiletter undtaget</div>
          <div class="rule-fine">Bøde: 200 kr. pr. hændelse</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">
            Afbud til begivenheder eller arrangementer på dagen for afholdelsen
          </div>
          <div class="rule-fine">Bøde: 50 kr.</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">For at blive forlovet</div>
          <div class="rule-fine">Bøde: 500 kr.</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">Samme igen ved ægteskab</div>
          <div class="rule-fine">Bøde: 500 kr.</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">Brække sig i andens seng</div>
          <div class="rule-fine">Bøde: 100 kr.</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">Uanmeldt afsked med drengene før kl. 12</div>
          <div class="rule-fine">Bøde: 50 kr.</div>
        </div>
      </div>

      <div class="rule-box">
        <div class="rule-content">
          <div class="rule-title">
            Dukker op til en begivenhed uden klar tilmelding
          </div>
          <div class="rule-fine">Bøde: 50 kr.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodekassen-container {
  background-color: black;
  color: #ffb22c; /* Gold color */
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
  font-weight: normal;
}

.elegant-subtitle {
  font-family: "Lucida Calligraphy", cursive, serif;
  font-size: 1.5rem;
  margin: 2rem 0 1.5rem;
  color: #ffb22c;
  font-weight: normal;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
}

.intro-text p {
  margin-bottom: 1rem;
}

.rules-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.rule-box {
  border: 1px solid #ffb22c;
  border-radius: 0;
  padding: 1rem;
  text-align: left;
}

.rule-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.rule-note {
  font-style: italic;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.rule-fine {
  font-weight: bold;
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

  .elegant-subtitle {
    font-size: 1.2rem;
  }

  .intro-text,
  .rules-container {
    padding: 0 10px;
  }
}
</style>
