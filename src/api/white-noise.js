import config from '@/request/config'
import request from '@/request/request'

export function getWhiteNoiseList(params)  {
  return request({
    method: 'get',
    url: config.baseUrl + '/getWhiteNoiseList',
    params
  })
}

export function getWhiteNoiseById(id)  {
  return request({
    method: 'get',
    url: config.baseUrl + `/getWhiteNoiseById/${id}`
  })
}

