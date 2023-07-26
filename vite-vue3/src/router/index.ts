import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// import Layout from '../components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router