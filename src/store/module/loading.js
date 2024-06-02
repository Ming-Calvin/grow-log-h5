let modules = {
  // 封装到命名空间,允许设置重复的方法
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, status) {
      state.loading = status;
    }
  }
}

export default modules;