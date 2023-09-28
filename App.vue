<template>
  <div>
    <nav class="navbar">
      
      
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/qualification">Qualification</router-link>
      
    
    </nav>

  
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>







