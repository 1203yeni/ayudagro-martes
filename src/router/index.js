import Vue from 'vue'
import VueRouter from 'vue-router'

import MenuView from '../views/MenuView.vue'
import PreguntasSinR from '../views/PreguntasSinR.vue'
import PreguntarView from '../views/PreguntarView.vue'
import CultivosView from '../views/CultivosView.vue'
import AgregarCultivo from '../views/AgregarCultivo.vue'
import LoginUsuarioView from'../views/LoginUsuarioView.vue'
import RecuperarclaveView from '../views/RecuperarclaveView.vue'
import RecuperarCodigoView from '../views/RecuperarCodigoView.vue'
import RegistroView from '../views/RegistroView.vue'
import NuevaContraseñaView from '../views/NuevaContraseñaView.vue'
import LoginAdministradorView from '../views/LoginAdministradorView.vue'
import PerfilUsuarioView from '../views/PerfilUsuarioView.vue'
import AlertaView from '../views/AlertaView.vue'
import InicioAdministradorView from '../views/InicioAdministradorView.vue'
import GuardarView from '../views/GuardarView.vue'
import AdministradorView from '../views/AdministradorView.vue'
import RespuestasView from '../views/RespuestasView.vue'
import Respuestas2View from '../views/Respuestas2View.vue'
import CultivosAdministradorView from '../views/CultivosAdministradorView'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'LoginUsuarioView',
    component: LoginUsuarioView
  },
  {
    path: '/AdministradorView',
    name: 'AdministradorView',
    component: AdministradorView
  },
  {
    path: '/Respuestas2View',
    name: 'Respuestas2View',
    component: Respuestas2View
  },
  {
    path: '/GuardarView',
    name: 'GuardarView',
    component: GuardarView
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
    path: '/LoginAdministradorView',
    name: 'LoginAdministradorView',
    component: LoginAdministradorView
  },
  {
    path: '/PerfilUsuarioView',
    name: 'PerfilUsuarioView',
    component: PerfilUsuarioView
  },
  {
    path: '/AlertaView',
    name: 'AlertaView',
    component: AlertaView
  },
  {
    path: '/InicioAdministradorView',
    name: 'InicioAdministradorView',
    component: InicioAdministradorView
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
    path: '/RespuestasView',
    name: 'RespuestasView',
    component:RespuestasView
  },
  {
    path: '/CultivosAdministradorView',
    name: 'CultivosAdministradorView',
    component:CultivosAdministradorView
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
