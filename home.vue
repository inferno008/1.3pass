<template>
  <div>
    <header>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore My Journey in Information Technology</p>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/qualification">Qualification</router-link></li>
      </ul>
    </nav>

    <main>
      <section class="introduction">
        <h2>About Me</h2>
        <p>Hello! I'm Buvan Mohanasundaram, a second-year student at Deakin University, majoring in Cybersecurity. Welcome to my portfolio website, where you can discover my journey and experiences in the field of Information Technology.</p>
        <p>I am passionate about cybersecurity and dedicated to enhancing digital security measures. Whether it's securing networks, analyzing vulnerabilities, or developing robust security solutions, I strive for excellence.</p>
        <p>Explore my projects and accomplishments, and feel free to get in touch if you have any questions or would like to collaborate on exciting opportunities. I look forward to sharing my IT journey with you!</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 Buvan Mohanasundaram</p>
    </footer>
  </div>
</template>

<script>
import './style.css';

export default {
  name: 'Home',
}
</script>





