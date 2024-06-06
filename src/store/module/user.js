import {getToken, setToken, removeToken} from '@/utils/auth'
import {login, getInfo} from '@/api/login'

const user = {
  namespaced: true,
  state: {
    token: getToken(),
    roles: [],
    permissions: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },

  actions: {
    // 登录
    async Login( { commit }, userInfo ) {
      try {
        const data = await login(userInfo)

        commit('SET_TOKEN', data.token)
      } catch (e) {
        console.log(e)
      }
    },
    // 获取用户信息
    async GetInfo( { commit, state } ) {
      const userInfo = await getInfo(state.token)

      commit('SET_ROLES', userInfo.roles)
      commit('SET_PERMISSIONS', userInfo.permissions)
    },
    // 退出系统
    LogOut( { commit } ) {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_PERMISSIONS', [])
      removeToken()
    }
  }
}

export default user
