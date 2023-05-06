import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfigurationView from '../views/ConfigurationView.vue'
import PlaybookGenerationView from '../views/PlaybookGenerationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: ConfigurationView
    },
    {
      path: '/playbook-generation',
      name: 'playbook-generation',
      component: PlaybookGenerationView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
