import config from '@/request/config'
import request from '@/request/request'

// 登录
export function login(data) {
  return request({
    method: 'post',
    url: config.baseUrl + '/api/login',
    data
  })
}

// 获取用户信息
export function getInfo(params) {
  return request({
    method: 'get',
    url: config.baseUrl + '/api/getUserInfo',
    params
  })
}

// 发送注册验证码
export function sendCode(data) {
  return request({
    method: 'post',
    url: config.baseUrl + '/api/send-code',
    data
  })
}

export function register(data) {
  return request({
    method: 'post',
    url: config.baseUrl + '/api/register',
    data
  })
}