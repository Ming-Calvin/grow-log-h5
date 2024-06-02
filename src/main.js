import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";

// vant ui
import Vant from "vant"
import 'vant/lib/index.css'
Vue.use(Vant)

// 移动端响应式布局
import 'lib-flexible';

// vConsole
import VConsole from "vconsole";
if(process.env.NODE_ENV === "development") {
  const vConsole = new VConsole();
  console.log(vConsole, 'e')
}

// 时间控件
import moment from "moment"
Vue.prototype.$moment = moment

// 设置全局事件总线


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
