<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />

  <section class="academic-top">
    <div class="academic-top-content">
      <p>ACADEMIC PROGRAMS</p>

      <h1>Education for<br /><span>Every Stage.</span></h1>

      <p class="description">
        Explore educational opportunities designed to help students build knowledge, develop skills,
        and prepare for their future.
      </p>
    </div>
  </section>

  <section class="program-section">
    <div class="program-container">
      <div class="section-title">
        <h2>Our Academic Levels</h2>
        <p>
          Toks University provides learning opportunities from basic education to higher education.
        </p>
      </div>

      <div class="program-grid">
        <article class="program-card">
          <div class="program-number">01</div>
          <h3>Kindergarten & Elementary</h3>
          <p>
            Building strong foundations in literacy, mathematics, science, creativity, and social
            development.
          </p>
          <a href="#">Learn More →</a>
        </article>

        <article class="program-card">
          <div class="program-number">02</div>
          <h3>Junior High School</h3>
          <p>
            Developing critical thinking, communication, academic knowledge, and personal
            responsibility.
          </p>
          <a href="#">Learn More →</a>
        </article>

        <article class="program-card">
          <div class="program-number">03</div>
          <h3>Senior High School</h3>
          <p>Preparing students for higher education, careers, and real-world opportunities.</p>
          <a href="#">Learn More →</a>
        </article>

        <article class="program-card blue-card">
          <div class="program-number">04</div>
          <h3>College Programs</h3>
          <p>
            Providing specialized knowledge and practical skills for professional development and
            future careers.
          </p>
          <a href="#">View Programs →</a>
        </article>
      </div>
    </div>
  </section>

  <footer class="site-footer">© 2026 Toks University. All Rights Reserved.</footer>
</template>

<style scoped>
.academic-top {
  background: #454545;
  padding: 5rem 2rem;
}

.academic-top-content {
  max-width: 1100px;
  margin: auto;
}

.academic-top-content > p:first-child {
  color: #d4a574;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
}

.academic-top h1 {
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.5rem, 7vw, 6rem);
  line-height: 1;
  margin: 1.5rem 0;
}

.academic-top h1 span {
  color: #d4a574;
}

.description {
  max-width: 600px;
  color: #ffffff;
  line-height: 1.8;
}

.program-section {
  background: #eef2f5;
  padding: 5rem 2rem;
}

.program-container {
  max-width: 1100px;
  margin: auto;
}

.section-title {
  margin-bottom: 3rem;
}

.section-title h2 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.5rem;
  margin: 0 0 0.7rem;
}

.section-title p {
  color: #4b5668;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.program-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 8px;
  border-left: 5px solid #d4a574;
}

.program-card.blue-card {
  background: #116f9d;
  border-left-color: #d4a574;
}

.program-number {
  color: #976a00;
  font-weight: 800;
}

.blue-card .program-number {
  color: #d4a574;
}

.program-card h3 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.7rem;
  margin: 1.5rem 0 1rem;
}

.blue-card h3 {
  color: #ffffff;
}

.program-card p {
  color: #4b5668;
  line-height: 1.7;
}

.blue-card p {
  color: #ffffff;
}

.program-card a {
  display: inline-block;
  margin-top: 1rem;
  color: #976a00;
  text-decoration: none;
  font-weight: 700;
}

.blue-card a {
  color: #d4a574;
}

.site-footer {
  background: #116f9d;
  color: #fffaf0;
  text-align: center;
  padding: 1.25rem;
}

@media (max-width: 700px) {
  .program-grid {
    grid-template-columns: 1fr;
  }
}
</style>
