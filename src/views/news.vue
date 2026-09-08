<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />

  <section class="news-header">
    <div>
      <p>UNIVERSITY NEWS</p>
      <h1>What's Happening<br /><span>at Toks.</span></h1>
    </div>
  </section>

  <section class="news-section">
    <div class="news-container">
      <!-- FEATURED -->
      <article class="featured-news">
        <div class="featured-date">FEATURED STORY</div>

        <h2>Welcome to a New Academic Year</h2>

        <p>
          Toks University welcomes students, faculty, and staff to another exciting academic year
          filled with learning, opportunities, and new experiences.
        </p>

        <a href="#">Read Story →</a>
      </article>

      <!-- NEWS GRID -->
      <div class="news-grid">
        <article class="news-card">
          <span>15 SEP 2026</span>
          <h3>Student Athletic Program</h3>
          <p>
            Our athletic programs encourage teamwork, discipline, and excellence both on and off the
            field.
          </p>
          <a href="#">Read More →</a>
        </article>

        <article class="news-card">
          <span>28 SEP 2026</span>
          <h3>University Community Event</h3>
          <p>
            Students and faculty come together through activities that strengthen community and
            school spirit.
          </p>
          <a href="#">Read More →</a>
        </article>

        <article class="news-card">
          <span>05 OCT 2026</span>
          <h3>New Student Organizations</h3>
          <p>
            Students can discover new interests and develop leadership skills through campus
            organizations.
          </p>
          <a href="#">Read More →</a>
        </article>
      </div>
    </div>
  </section>

  <footer class="site-footer">© 2026 Toks University. All Rights Reserved.</footer>
</template>

<style scoped>
.news-header {
  background: #454545;
  padding: 5rem 2rem;
}

.news-header > div {
  max-width: 1100px;
  margin: auto;
}

.news-header p {
  color: #d4a574;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
}

.news-header h1 {
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.5rem, 7vw, 6rem);
  line-height: 1;
}

.news-header h1 span {
  color: #d4a574;
}

.news-section {
  background: #eef2f5;
  padding: 5rem 2rem;
}

.news-container {
  max-width: 1100px;
  margin: auto;
}

.featured-news {
  background: #116f9d;
  padding: 3.5rem;
  color: #ffffff;
  border-radius: 8px;
}

.featured-date {
  color: #d4a574;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15rem;
}

.featured-news h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.5rem;
  margin: 1.5rem 0;
}

.featured-news p {
  max-width: 700px;
  line-height: 1.8;
}

.featured-news a {
  display: inline-block;
  margin-top: 1.5rem;
  color: #d4a574;
  font-weight: 700;
  text-decoration: none;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.news-card {
  background: #ffffff;
  padding: 2rem;
  border-top: 4px solid #d4a574;
}

.news-card > span {
  color: #976a00;
  font-size: 0.7rem;
  font-weight: 800;
}

.news-card h3 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.4rem;
  margin: 1.2rem 0;
}

.news-card p {
  color: #4b5668;
  line-height: 1.7;
  font-size: 0.9rem;
}

.news-card a {
  display: inline-block;
  margin-top: 1rem;
  color: #976a00;
  text-decoration: none;
  font-weight: 700;
}

.site-footer {
  background: #116f9d;
  color: #fffaf0;
  text-align: center;
  padding: 1.25rem;
}

@media (max-width: 800px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
