<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />

  <section class="campus-intro">
    <div class="campus-intro-content">
      <div>
        <p class="label">LIFE ON CAMPUS</p>

        <h1>
          Learn.<br />
          Connect.<br />
          <span>Belong.</span>
        </h1>
      </div>

      <p class="intro-text">
        University life is about more than classrooms. Students at Toks University have
        opportunities to participate, lead, compete, and create lasting memories.
      </p>
    </div>
  </section>

  <section class="activities-section">
    <div class="activities-container">
      <div class="activity-heading">
        <p>DISCOVER CAMPUS LIFE</p>
        <h2>Something for Everyone</h2>
      </div>

      <div class="activity-grid">
        <div class="activity">
          <div class="icon">01</div>
          <h3>Student Organizations</h3>
          <p>
            Join organizations and student groups that encourage leadership, friendship, creativity,
            and teamwork.
          </p>
        </div>

        <div class="activity">
          <div class="icon">02</div>
          <h3>Sports</h3>
          <p>
            Take part in athletic programs that develop discipline, teamwork, confidence, and a
            healthy lifestyle.
          </p>
        </div>

        <div class="activity">
          <div class="icon">03</div>
          <h3>Events</h3>
          <p>
            Experience university events, celebrations, competitions, and activities throughout the
            academic year.
          </p>
        </div>

        <div class="activity">
          <div class="icon">04</div>
          <h3>Leadership</h3>
          <p>
            Develop leadership skills by taking initiative and participating in university programs
            and activities.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="campus-banner">
    <div>
      <p>MORE THAN A SCHOOL</p>
      <h2>Build Your University Experience.</h2>
    </div>
  </section>

  <footer class="site-footer">© 2026 Toks University. All Rights Reserved.</footer>
</template>

<style scoped>
.campus-intro {
  background: #116f9d;
  padding: 5rem 2rem;
}

.campus-intro-content {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 5rem;
  align-items: center;
}

.label,
.activity-heading p,
.campus-banner p {
  color: #d4a574;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
}

.campus-intro h1 {
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(4rem, 7vw, 6rem);
  line-height: 0.95;
  margin: 1.5rem 0 0;
}

.campus-intro h1 span {
  color: #d4a574;
}

.intro-text {
  color: #ffffff;
  line-height: 1.9;
  font-size: 1.05rem;
}

.activities-section {
  background: #ffffff;
  padding: 5rem 2rem;
}

.activities-container {
  max-width: 1100px;
  margin: auto;
}

.activity-heading h2 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.7rem;
  margin: 1rem 0 3rem;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid #dfe5eb;
}

.activity {
  padding: 2rem 1.5rem;
  border-right: 1px solid #dfe5eb;
}

.activity:last-child {
  border-right: none;
}

.icon {
  color: #976a00;
  font-weight: 800;
}

.activity h3 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  margin: 1.5rem 0 1rem;
}

.activity p {
  color: #4b5668;
  line-height: 1.7;
  font-size: 0.9rem;
}

.campus-banner {
  background: #eef2f5;
  padding: 4rem 2rem;
  text-align: center;
}

.campus-banner h2 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.5rem;
}

.site-footer {
  background: #116f9d;
  color: #fffaf0;
  text-align: center;
  padding: 1.25rem;
}

@media (max-width: 800px) {
  .campus-intro-content {
    grid-template-columns: 1fr;
  }

  .activity-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .activity:nth-child(2) {
    border-right: none;
  }
}

@media (max-width: 500px) {
  .activity-grid {
    grid-template-columns: 1fr;
  }

  .activity {
    border-right: none;
    border-bottom: 1px solid #dfe5eb;
  }
}
</style>
