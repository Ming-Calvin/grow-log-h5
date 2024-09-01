import config from '@/request/config'
import request from '@/request/request'

// 登录
export function login(data) {
  return request({
    method: 'post',
    url: config.baseUrl + '/loginUser',
    data
  })
}

// 获取用户信息
export function getInfo() {
  return request({
    method: 'get',
    url: config.baseUrl + '/getUserInfo'
  })
}

// 发送注册验证码
export function sendCode(data) {
  return request({
    method: 'post',
    url: config.baseUrl + '/sendVerificationCode',
    data
  })
}

export function register(data) {
  return request({
    method: 'post',
    url: config.baseUrl + '/registerUser',
    data
  })
}