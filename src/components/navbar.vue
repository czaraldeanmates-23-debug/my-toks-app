<template>
  <nav>
    <div class="brand">
      <img src="@/assets/jonard.png" alt="Logo" class="logo" />
      <div class="brand-text">
        <span class="brand-name">Toks University</span>
        <span class="brand-tagline">GREATNESS STARTS HERE</span>
      </div>
    </div>

    <div class="nav-right">
      <ul>
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li><router-link to="/about_us" active-class="active">About</router-link></li>
        <li><router-link to="/admission" active-class="active">Admission</router-link></li>
        <li><router-link to="/academics" active-class="active">Academics</router-link></li>
        <li><router-link to="/campus_life" active-class="active">Campus Life</router-link></li>
        <li><router-link to="/news" active-class="active">News</router-link></li>
        <li><router-link to="/contact" active-class="active">Contact</router-link></li>
        <li><router-link to="/sample-data" active-class="active">Sample Data</router-link></li>
        <li><router-link to="/sample-method" active-class="active">Sample Method</router-link></li>
        <li><router-link to="/sample-Vmodel" active-class="active">Sample Vmodel</router-link></li>
      </ul>

      <div class="portal-btn">Portal Login</div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: 'Times New Roman', Times, serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px 50px;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Logo and Brand Text */

.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.logo {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 2rem;
  font-weight: 700;
  color: #454545;
  line-height: 1.5;
}

.brand-tagline {
  font-size: 1rem;
  color: #976a00;
  letter-spacing: 1px;
  font-weight: 600;
}

/* Menu Right */

nav ul {
  display: flex;
  list-style: none;
  gap: 26px;
  margin: 0;
  padding: 0;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.portal-btn {
  padding: 0.6rem 1.4rem;
  background: #454545;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
}

nav a {
  text-decoration: none;
  color: #454545;
  font-weight: 600;
  transition: color 0.2s;
}

nav a.active {
  color: #976a00;
  font-weight: 700;
  text-decoration: underline;
}

nav a.hover {
  color: #976a00;
}
</style>
