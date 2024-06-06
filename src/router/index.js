import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/auth';
import { routes } from '@/router/routes';
// import store from '@/store';
import mToast from '@/utils/toast';

// 建立路由
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 白名单
const whiteList = [
  '/login',
  '/register'
];

router.beforeEach((to, from, next) => {
  if(getToken()) {
    next();
  } else {
    // 没有token重定向页面
    if(whiteList.indexOf(to.path) !== -1) {
      // 在免登白名单内，直接登录
      next();
    } else {
      // 重定向到登录页
      mToast.tips('Please log in first');
      next(`/login?redirect=${to.fullPath}`);
    }
  }
});


export default router;
