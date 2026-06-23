import{createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/tama', name: 'Tama', component: ()=>import('../views/Tama.vue')},
    {path: '/dessin/:id', name: 'dessin.show', component: ()=>import('../views/DessinShow.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { top: -10 }
      },
    routes
})

export default router