import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginUsuarioView from'../views/LoginUsuarioView.vue'
import RecuperarclaveView from '../views/RecuperarclaveView.vue'
import RecuperarCodigoView from '../views/RecuperarCodigoView.vue'
import RegistroView from '../views/RegistroView.vue'
import NuevaContraseñaView from '../views/NuevaContraseñaView.vue'
import InicioAdministradorView from '../views/InicioAdministradorView.vue'
import PerfilUsuarioView from '../views/PerfilUsuarioView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/LoginUsuarioView',
    name: 'LoginUsuarioView',
    component: LoginUsuarioView
  },
  {
    path: '/RecuperarclaveView',
    name: 'RecuperarclaveView',
    component: RecuperarclaveView
  },
  {
    path: '/RecuperarCodigoView',
    name: 'RecuperarCodigoView',
    component: RecuperarCodigoView
  },
  {
    path: '/RegistroView',
    name: 'RegistroView',
    component: RegistroView
  },
  {
    path: '/NuevaContraseñaView',
    name: 'NuevaContraseñaView',
    component: NuevaContraseñaView
  },
  {
    path: '/InicioAdministradorView',
    name: 'InicioAdministradorView',
    component: InicioAdministradorView
  },
  {
    path: '/PerfilUsuarioView',
    name: 'PerfilUsuarioView',
    component: PerfilUsuarioView
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
