import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// import Layout from '../components/HelloWorld.vue'
import Layout from '@/views/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  console.log(to);
  
  next()
})

export default router