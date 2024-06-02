// 注册全局组件
import Vue from 'vue';

const globalComponents = [];

globalComponents.forEach(ele => {
  Vue.component(`${ ele.name }`, ele);
});