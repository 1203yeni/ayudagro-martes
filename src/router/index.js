import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import PreguntasSinR from '../views/PreguntasSinR.vue'
import PreguntarView from '../views/PreguntarView.vue'
import CultivosView from '../views/CultivosView.vue'
import AgregarCultivo from '../views/AgregarCultivo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/MenuView',
    name: 'MenuView',
    component: MenuView
  }, 
  {
    path: '/AgregarCultivo',
    name: 'AgregarCultivo',
    component: AgregarCultivo
  }, 
  {
    path: '/CultivosView',
    name: 'CultivosView',
    component: CultivosView
  }, 

   {
    path: '/PreguntarView',
    name: 'PreguntarView',
    component:PreguntarView
  },
  {
    path: '/PreguntasSinR',
    name: 'PreguntasSinR',
    component:PreguntasSinR
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
