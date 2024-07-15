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
        const data = await login(userInfo)

        commit('SET_TOKEN', data.token)
        // 此时this指向store
        router.push({ name: 'journaList'})

        // 获取用户信息
        await store.dispatch('user/GetInfo')
      } catch (e) {
        console.log(e)
      }
    },
    // 获取用户信息
    async GetInfo( { commit, state } ) {
      try {
        const userInfo = await getInfo()

        console.log(userInfo)
        commit('SET_USERNAME', userInfo.user.username)
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
