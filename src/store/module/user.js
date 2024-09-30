import {
  getToken,
  setToken,
  removeToken,
  getRoles,
  setRoles,
  getPermissions,
  setPermissions,
  removeRoles,
  removePermissions
} from '@/utils/auth'
import {login, getInfo} from '@/api/login'
import router from '@/router'
import store from '@/store'
import mToast from '@/utils/toast'

const user = {
  namespaced: true,
  state: {
    token: getToken(),
    roles: getRoles() || [],
    permissions: getPermissions() || [],
    username: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
      setRoles(roles)
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
      setPermissions(permissions)
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    }
  },

  actions: {
    // 登录
    async Login( { commit }, userInfo ) {
      try {
        const loginData = await login(userInfo)

        mToast.success(loginData.message)

        commit('SET_TOKEN', loginData.data.token)
        // 此时this指向store
        router.push({ name: 'journaList'})

      } catch (e) {
        mToast.fail(e.response.data.message)
      }
    },
    // 获取用户信息
    async GetInfo( { commit, state } ) {
      try {
        const userInfo = await getInfo()

        commit('SET_USERNAME', userInfo.data[0].username)
      } catch (e) {
        console.log(e)
        // commit('SET_ROLES', userInfo.roles)
        // commit('SET_PERMISSIONS', userInfo.permissions)
      }
    },
    // 退出系统
    LogOut( { commit } ) {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_PERMISSIONS', [])
      removeToken()
      removeRoles()
      removePermissions()
    }
  }
}

export default user
