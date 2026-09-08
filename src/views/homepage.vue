<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar></navbar>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-columns">
      <div class="hero-left">
        <p class="eyebrow">ESTABLISHED 1985</p>
        <h1>Shaping <span class="gold-text">Minds, </span><br />Building Futures</h1>
        <p>
          At Toks University, we are committed to providing a transformative educational experience
          that empowers students to reach their full potential. Our dedicated faculty,
          state-of-the-sports facilities, and vibrant campus community create an environment where
          students can thrive academically, socially, and personally.
        </p>
        <div class="hero-actions">
          <button class="primary-action">Explore Academics</button>
          <button class="secondary-action">Request Information</button>
        </div>
        <div class="stats">
          <div><strong>118+</strong><span>Years of Excellence</span></div>
          <div><strong>20+</strong><span>Academic Programs</span></div>
          <div><strong>5,000+</strong><span>Active Students</span></div>
          <div><strong>20+</strong><span>Partner Institutions</span></div>
        </div>
      </div>

      <div class="hero-right">
        <img src="@/assets/AJ1.png" alt="CPU Seal" class="seal" />
        <h2>Toks University</h2>
        <span class="tagline">GREATNESS STARTS HERE</span>
        <p class="qoute">"A Heritage of Champions"</p>
      </div>
    </div>
  </section>
  <!-- End of Hero Section -->

  <!-- Start of Admissions Section -->
  <section class="admission-section">
    <div class="section-header">
      <p class="section-subtitle">JOIN OUR COMMUNITY</p>
      <h2>Admissions</h2>
    </div>

    <div class="admissions-grid">
      <!-- Admission Process Card -->
      <article class="admission-card">
        <div class="card-icon">📋</div>
        <h3>Admission Process</h3>
        <ol class="process-list">
          <li>Submit online application form via the student portal.</li>
          <li>Take the Toks University Placement Examination.</li>
          <li>Undergo interview with department heads (if applicable).</li>
          <li>Pay enrollment fees and register for classes.</li>
        </ol>
        <a href="#" class="card-link">Learn more →</a>
      </article>

      <!-- Requirements Card -->
      <article class="admission-card">
        <div class="card-icon">✓</div>
        <h3>Requirements</h3>
        <ul class="requirements-list">
          <li>Original Form 138 (Report Card)</li>
          <li>Certificate of Good Moral Character</li>
          <li>PSA Birth Certificate (Photocopy)</li>
          <li>2×2 ID Pictures with white background</li>
          <li>Transfer Credentials (for Transferees)</li>
        </ul>
        <a href="#" class="card-link">View full checklist →</a>
      </article>

      <!-- Programs Offered Card -->
      <article class="admission-card">
        <div class="card-icon">🎓</div>
        <h3>Programs Offered</h3>
        <ul class="programs-list">
          <li>Kindergarten &amp; Elementary</li>
          <li>Junior &amp; Senior High School</li>
          <li>College Programs</li>
        </ul>
        <a href="#" class="card-link">View programs →</a>
      </article>
    </div>
  </section>

  <footer class="site-footer">© 2026 Toks University. All Rights Reserved.</footer>
</template>

<style scoped>
.hero {
  background: #fff;
  width: 100%;
  padding: 2rem 2.5rem;
  margin: 0;
  box-sizing: border-box;
}

.hero-columns {
  max-width: 1180px;
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
}

.hero-left {
  flex: 1 1 50%;
  max-width: 560px;
  color: #757478;
}

.eyebrow {
  color: #976a00;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  margin: 0 0 1.25rem;
}

.hero-left h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3rem, 3.2vw, 10rem);
  line-height: 1.02;
  margin: 0 0 1.5rem;
  color: #454545;
}

.gold-text {
  color: #976a00;
}

.hero-left > p:not(.eyebrow) {
  max-width: 520px;
  color: #976a00;
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}

button {
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding: 0.85rem 1.3rem;
  border-radius: 4px;
}

.primary-action {
  background: #454545;
  color: #fff;
  border: 1px solid #454545;
}

.secondary-action {
  background: #fff;
  color: #454545;
  border: 1px solid #454545;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #fff;
  box-shadow: 0 4px 18px rgba(35, 12, 100, 0.1);
  border-radius: 6px;
  margin-top: 1.5rem;
  padding: 1rem 0.5rem;
}

.stats div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 0 0.5rem;
  border-right: 1px solid #e3e0e8;
  text-align: center;
}

.stats div:last-child {
  border-right: 0;
}

.stats strong {
  color: #454545;
  font-size: 1.1rem;
}

.stats span {
  color: #55515d;
  font-size: 0.65rem;
}

.hero-right {
  flex: 1 1 45%;
  max-width: 520px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  background: linear-gradient(145deg, #454545, #f6f4f0 62%, #fff);
  border-radius: 14px;
  box-shadow: 0 12px 25px rgba(35, 12, 100, 0.12);
}

.seal {
  width: 300px;
  height: 300px;
  object-fit: contain;
  display: block;
  background: transparent;
  filter: drop-shadow(0 2px 0 rgba(35, 12, 100, 0.08));
  margin-bottom: 1rem;
}

.hero-right h2 {
  max-width: 360px;
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2rem;
  line-height: 1.1;
  margin: 0;
}

.tagline {
  color: #454545;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.35rem;
  margin-top: 1rem;
}

.qoute {
  color: #565260;
  font-style: italic;
  line-height: 1.5;
  margin: 1.5rem 0 0;
}

.admission-section,
.programs-section {
  background: #eef2f5;
  padding: 3rem 2.5rem 2.5rem;
}

.section-header {
  max-width: 1180px;
  margin: 0 auto 2rem;
  text-align: center;
}

.section-subtitle {
  color: #d4a574;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-transform: uppercase;
  display: block;
}

.section-header h2 {
  margin: 0;
  color: #1d2e4f;
  font-size: clamp(2.25rem, 2vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: #d4a574;
  border-radius: 2px;
}

.section-header p {
  margin: 0.5rem auto 0;
  color: #50596d;
  font-size: 1.2rem;
}

.process-grid,
.program-grid,
.admissions-grid {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
}

.admissions-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.process-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.admission-card {
  background: #116f9d;
  border-radius: 8px;
  padding: 40px 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 350px;
}

.admission-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.admission-card h3 {
  font-size: 20px;
  color: #e3e4e6;
  font-weight: 600;
  margin: 0 0 20px 0;
}

.process-list,
.requirements-list,
.programs-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  text-align: left;
  flex: 1;
}

.process-list {
  counter-reset: step-counter;
}

.process-list li {
  counter-increment: step-counter;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  padding-left: 0;
  position: relative;
}

.process-list li::before {
  content: counter(step-counter);
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #d4a574;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  font-weight: bold;
  font-size: 12px;
  margin-right: 10px;
  flex-shrink: 0;
}

.requirements-list li,
.programs-list li {
  color: #ffffff;
  font-size: 14px;
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
}

.requirements-list li::before,
.programs-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #d4a574;
  font-weight: bold;
}

.card-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: color 0.3s ease;
  margin-top: auto;
  padding-top: 20px;
}

.card-link:hover {
  color: #d4a574;
}

.process-card {
  background: #f3f5f7;
  border: 1px solid #dfe5eb;
  border-radius: 1.1rem;
  padding: 1.7rem 1.5rem 1.5rem;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.step-number {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: #eaf1ff;
  color: #1f3a74;
  border: 1px solid #d1dcff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.card-copy h3 {
  margin: 0 0 0.8rem;
  color: #9ea1a7;
  font-size: clamp(1.8rem, 1.8vw, 2.5rem);
  line-height: 1.2;
  font-weight: 800;
}

.card-copy p {
  margin: 0;
  color: #4b5668;
  font-size: 1rem;
  line-height: 1.7;
}

.process-card a {
  margin-top: 1.25rem;
  color: #b5bac4;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
}

.process-card a span {
  margin-left: 0.25rem;
}

.program-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.program-card {
  background: #f9f9f9;
  border: 1px solid #dde4ec;
  border-radius: 1.1rem;
  padding: 1.2rem 1rem 1rem;
  min-height: 220px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.03);
}

.program-copy {
  flex: 1;
}

.program-copy h3 {
  margin: 0 0 0.5rem;
  color: #9ea1a7;
  font-size: clamp(1.25rem, 1.2vw, 1.9rem);
  line-height: 1.3;
  font-weight: 800;
}

.program-copy p {
  margin: 0;
  color: #4b5668;
  line-height: 1.6;
  font-size: 0.95rem;
}

.arrow {
  color: #b5bac4;
  font-size: 2.3rem;
  font-weight: 300;
  line-height: 1;
}

.site-footer {
  background: #116f9d;
  color: #fffaf0;
  font-size: 1rem;
  padding: 1.25rem;
  text-align: center;
}

@media (max-width: 980px) {
  .process-grid,
  .admissions-grid {
    grid-template-columns: 1fr;
  }

  .program-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .hero {
    padding: 1.5rem;
  }

  .hero-columns {
    flex-direction: column;
    min-height: auto;
    gap: 2rem;
  }

  .hero-left,
  .hero-right {
    max-width: 100%;
    width: 100%;
  }

  .hero-right {
    min-height: 420px;
  }
}

@media (max-width: 520px) {
  .hero-actions {
    flex-direction: column;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 0;
  }

  .stats div:nth-child(2) {
    border-right: 0;
  }

  .program-grid {
    grid-template-columns: 1fr;
  }

  .program-card {
    flex-wrap: wrap;
  }
}
</style>
