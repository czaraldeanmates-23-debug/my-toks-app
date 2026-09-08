<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />

  <!-- HERO -->
  <section class="about-hero">
    <div class="about-hero-content">
      <p class="label">WHO WE ARE</p>

      <h1>Welcome to<br /><span>Toks University</span></h1>

      <p class="hero-text">
        A place where knowledge, character, and opportunity come together
        to prepare students for a successful future.
      </p>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about-main">
    <div class="about-wrapper">

      <div class="about-title">
        <span>01</span>
        <h2>About Our University</h2>
      </div>

      <div class="about-text">
        <p>
          Toks University is dedicated to providing students with quality
          education and meaningful experiences that prepare them for the
          challenges of the future.
        </p>

        <p>
          Through dedicated faculty, supportive learning environments,
          and opportunities beyond the classroom, we encourage students
          to discover their abilities and pursue excellence.
        </p>
      </div>

    </div>
  </section>

  <!-- MISSION VISION VALUES -->
  <section class="values-section">
    <div class="values-container">

      <div class="value-card">
        <span>02</span>
        <h2>Our Mission</h2>
        <p>
          To provide accessible and quality education that develops
          knowledgeable, responsible, and capable individuals.
        </p>
      </div>

      <div class="value-card featured">
        <span>03</span>
        <h2>Our Vision</h2>
        <p>
          To become a learning community recognized for academic
          excellence, innovation, and service to society.
        </p>
      </div>

      <div class="value-card">
        <span>04</span>
        <h2>Our Values</h2>
        <p>
          Integrity, excellence, respect, responsibility, teamwork,
          and lifelong learning guide our university community.
        </p>
      </div>

    </div>
  </section>

  <footer class="site-footer">
    © 2026 Toks University. All Rights Reserved.
  </footer>
</template>

<style scoped>
.about-hero {
  background: #116f9d;
  min-height: 55vh;
  display: flex;
  align-items: center;
}

.about-hero-content {
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 5rem 2rem;
}

.label {
  color: #d4a574;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
  margin-bottom: 1.5rem;
}

.about-hero h1 {
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.5rem, 7vw, 6rem);
  line-height: 1;
  margin: 0;
}

.about-hero h1 span {
  color: #d4a574;
}

.hero-text {
  max-width: 600px;
  color: #ffffff;
  line-height: 1.8;
  margin-top: 2rem;
}

.about-main {
  background: #ffffff;
  padding: 5rem 2rem;
}

.about-wrapper {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 5rem;
}

.about-title span {
  color: #976a00;
  font-weight: 800;
}

.about-title h2 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.5rem;
  margin-top: 1rem;
}

.about-text p {
  color: #4b5668;
  line-height: 1.9;
  margin-bottom: 1.5rem;
}

.values-section {
  background: #eef2f5;
  padding: 5rem 2rem;
}

.values-container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.value-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 8px;
  border-top: 5px solid #d4a574;
}

.value-card.featured {
  background: #116f9d;
}

.value-card span {
  color: #976a00;
  font-weight: 800;
}

.value-card.featured span {
  color: #d4a574;
}

.value-card h2 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  margin: 1.5rem 0 1rem;
}

.value-card.featured h2 {
  color: #ffffff;
}

.value-card p {
  color: #4b5668;
  line-height: 1.7;
}

.value-card.featured p {
  color: #ffffff;
}

.site-footer {
  background: #116f9d;
  color: #fffaf0;
  text-align: center;
  padding: 1.25rem;
}

@media (max-width: 800px) {
  .about-wrapper,
  .values-container {
    grid-template-columns: 1fr;
  }

  .about-hero {
    min-height: 45vh;
  }
}
</style>