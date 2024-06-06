export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/view/Register.vue')
  }
]
