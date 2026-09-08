<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />

  <section class="contact-section">
    <div class="contact-container">
      <!-- CONTACT INFORMATION -->
      <div class="contact-info">
        <p class="label">CONTACT TOKS UNIVERSITY</p>

        <h1>
          Let's<br />
          <span>Connect.</span>
        </h1>

        <p class="description">
          Have a question about admissions, academic programs, campus life, or the university? Send
          us a message.
        </p>

        <div class="details">
          <div>
            <small>ADDRESS</small>
            <p>
              Toks University<br />
              Iloilo City, Philippines
            </p>
          </div>

          <div>
            <small>EMAIL</small>
            <p>info@toksuniversity.com</p>
          </div>

          <div>
            <small>PHONE</small>
            <p>+63 900 000 0000</p>
          </div>
        </div>
      </div>

      <!-- FORM -->
      <div class="contact-form-wrapper">
        <h2>Send Us a Message</h2>

        <p>Fill out the form and our team will get back to you.</p>

        <form class="contact-form">
          <label>
            Full Name
            <input type="text" placeholder="Enter your name" />
          </label>

          <label>
            Email Address
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            Subject
            <input type="text" placeholder="What is your message about?" />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Write your message here..."></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <footer class="site-footer">© 2026 Toks University. All Rights Reserved.</footer>
</template>

<style scoped>
.contact-section {
  background: #eef2f5;
  padding: 5rem 2rem;
  min-height: calc(100vh - 80px);
}

.contact-container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.contact-info {
  background: #116f9d;
  padding: 4rem 3rem;
}

.label {
  color: #d4a574;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15rem;
}

.contact-info h1 {
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.5rem, 5vw, 5rem);
  line-height: 0.95;
  margin: 2rem 0;
}

.contact-info h1 span {
  color: #d4a574;
}

.description {
  color: #ffffff;
  line-height: 1.8;
}

.details {
  margin-top: 3rem;
}

.details div {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.2rem 0;
}

.details small {
  color: #d4a574;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
}

.details p {
  color: #ffffff;
  line-height: 1.6;
  margin: 0.5rem 0 0;
}

.contact-form-wrapper {
  padding: 4rem 3rem;
}

.contact-form-wrapper h2 {
  color: #454545;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2rem;
  margin: 0;
}

.contact-form-wrapper > p {
  color: #757478;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-form label {
  color: #454545;
  font-size: 0.85rem;
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.5rem;
  padding: 1rem;
  background: #f3f5f7;
  border: 1px solid #dfe5eb;
  outline: none;
  font-family: Arial, sans-serif;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #976a00;
}

.contact-form button {
  width: fit-content;
  background: #116f9d;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
}

.contact-form button:hover {
  background: #976a00;
}

.site-footer {
  background: #116f9d;
  color: #fffaf0;
  text-align: center;
  padding: 1.25rem;
}

@media (max-width: 800px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-info,
  .contact-form-wrapper {
    padding: 3rem 2rem;
  }
}
</style>
