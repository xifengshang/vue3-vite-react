import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// import Layout from '../components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Hello',
    component: () => import('../components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router