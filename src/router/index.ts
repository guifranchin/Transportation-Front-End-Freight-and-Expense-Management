import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CadastroFrete from '@/views/Frete/Cadastro.vue'
import ListagemFrete from '@/views/Frete/Listagem.vue'
<<<<<<< HEAD
=======
import StatusTransporte from '@/views/Frete/StatusTransporte.vue'
import StatusInterrompido from '@/views/Frete/StatusInterrompido.vue'
import StatusCancelado from '@/views/Frete/StatusCancelado.vue'
import StatusDescarga from '@/views/Frete/StatusDescarga.vue'
>>>>>>> master


const routes: Array<RouteRecordRaw> = [
  {
<<<<<<< HEAD
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
=======
    path: '/cadastro',
>>>>>>> master
    name: 'Cadastro de Frete',
    component: CadastroFrete
  },
  {
<<<<<<< HEAD
    path: '/frete',
    name: 'Listagem dos fretes',
    component: ListagemFrete
=======
    path: '/listagem',
    name: 'Listagem dos fretes',
    component: ListagemFrete
  },
  {
    path: '/statusTransporte/:id',
    name: 'Status Transporte',
    component: StatusTransporte
  },
  {
    path: '/statusInterrompido/:id',
    name: 'Status Interrompido',
    component: StatusInterrompido
  },
  {
    path: '/statusCancelado/:id',
    name: 'Status Cancelado',
    component: StatusCancelado
  },
  {
    path: '/statusDescarga/:id',
    name: 'Status Descarga',
    component: StatusDescarga
>>>>>>> master
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
