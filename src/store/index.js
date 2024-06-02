import Vue from "vue";
import Vuex from "vuex";
import getters from "@/store/getters";
import loading from "@/store/module/loading";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    loading,
  },
  getters,
})

export default store;