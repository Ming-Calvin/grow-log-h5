// 注册全局组件
import Vue from 'vue'

const CustomForm = () => import('@/components/Form')

const globalComponents = [
  CustomForm
]

globalComponents.forEach(ele => {
  Vue.component(`${ ele.name }`, ele)
})
