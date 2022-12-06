import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CadastroFrete from '@/views/Frete/Cadastro.vue'
import ListagemFrete from '@/views/Frete/Listagem.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/frete/cadastro',
    name: 'Cadastro de Frete',
    component: CadastroFrete
  },
  {
    path: '/frete',
    name: 'Listagem dos fretes',
    component: ListagemFrete
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
