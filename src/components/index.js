// 注册全局组件
import Vue from 'vue'
import CustomForm from '@/components/Form'

const globalComponents = [
  CustomForm
]

globalComponents.forEach(ele => {
  Vue.component(`${ ele.name }`, ele)
})
