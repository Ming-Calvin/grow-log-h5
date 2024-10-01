export const routes = [
  {
    path: '/',
    redirect: {
      path: '/journal-list'
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
        path: '/user',
        name: 'user',
        component: () => import('@/view/layout/home/home.vue')
      },
      {
        path: '/white-noise-list',
        name: 'whiteNoiseList',
        component: () => import('@/view/layout/whiteNoise/List.vue')
      },
      {
        path: '/journal-list',
        name: 'journaList',
        component: () => import('@/view/layout/journalList/journalList.vue')
      }
    ]
  },
  {
    path: '/newJournal',
    name: 'newJournal',
    component: () => import('@/view/journal/NewJournal.vue')
  },
  {
    path: '/journalDetail',
    name: 'journalDetail',
    component: () => import('@/view/journal/journalDetail.vue')
  },
  {
    path: '/white-noise',
    name: 'whiteNoise',
    component: () => import('@/view/layout/whiteNoise/whiteNoise.vue')
  }
]
