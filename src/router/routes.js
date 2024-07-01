export const routes = [
  {
    path: '/',
    redirect: {
      path: '/home'
    }
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
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/view/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/layout/home/home.vue')
      },
      {
        path: '/white-noise',
        name: 'whiteNoise',
        component: () => import('@/view/layout/whiteNoise.vue')
      }
    ]
  }
]
