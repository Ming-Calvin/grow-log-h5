import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRoles() {
  return Cookies.get('Roles')
}

export function setRoles(roles) {
  return Cookies.set('Roles', roles)
}

export function removeRoles() {
  return Cookies.remove('Roles')
}

export function getPermissions() {
  return Cookies.get('Permissions')
}

export function setPermissions(permissions) {
  return Cookies.set('Permissions', permissions)
}

export function removePermissions() {
  return Cookies.remove('Permissions')
}
