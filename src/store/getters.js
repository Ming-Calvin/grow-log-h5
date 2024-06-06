const getters = {
  loading: (state) => state.loading.loading,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  permissions: (state) => state.user.permissions
}

export default getters
