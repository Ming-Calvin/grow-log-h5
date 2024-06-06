import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import loading from '@/store/module/loading'
import user from '@/store/module/user'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    loading,
    user
  },
  getters
})

export default store
