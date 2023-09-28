<!-- Contact.vue -->

<template>
  <div>
    <header>
      <h1>Contact Us</h1>
      <p>Get in Touch with Us</p>
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
      <section class="contact-details">
        <h2>Contact Information</h2>
        <ul>
          <li><strong>Name:</strong> Buvan</li>
          <li><strong>Email:</strong> mbuvan75@gmail.com</li>
          <li><strong>Phone Number:</strong> 0276717480</li>
        </ul>
      </section>

      <section class="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label for="inquiry">Your Inquiry:</label>
          <textarea id="inquiry" name="inquiry" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; SIT 120 2023</p>
    </footer>
  </div>
</template>

<script>
       import './style.css';

export default {
  name: 'Contact',
}
</script>



