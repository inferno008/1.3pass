import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import Projects from './views/projects.vue'
import Contact from './views/contact.vue'
import Qualification from './views/qualification.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/qualification',
      component: Qualification
    }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')


