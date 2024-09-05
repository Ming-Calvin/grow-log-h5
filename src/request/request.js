import axios from 'axios'
import store from '@/store'
import errorCode from '@/utils/errorCode'
import { getToken } from '@/utils/auth'
import mToast from '@/utils/toast'

axios.defaults.headers['Content-Type'] = 'application/json'

const service = axios.create({
  timeout: 1000000
})

let loadingCount = 0

const showLoading = () => {
  loadingCount++
  store.commit('loading/SET_LOADING', true)
}

const hideLoading = () => {
  loadingCount--
  if (loadingCount == 0) store.commit('loading/SET_LOADING', false)
}

service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }

    showLoading()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(res => {
  const code = res.data.code || 200
  const msg = errorCode[code] || res.data.msg || errorCode['default']
  hideLoading()
  if (code === 400) {
    console.log(msg, 'msg')
    mToast.fail(msg)
  }else if (code === 401) {
    console.log(msg, 'msg')
    mToast.fail(msg)
  } else if (code === 404) {
    mToast.fail(msg)
    return Promise.reject(new Error(msg))
  } else if (code === 500) {
    mToast.fail(msg)
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    mToast.fail(msg)
    return Promise.reject('error')
  } else {
    // mToast.success(msg)
    return res.data
  }
},
error => {
  console.log(error)
  return Promise.reject(error)
})

export default service
