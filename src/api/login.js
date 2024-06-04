import config from '@/request/config';
import request from '@/request/request';

export function login(data) {
  return request({
    method: 'post',
    url: config.baseUrl + '/api/login',
    data
  });
}

export function getInfo(params) {
  return request({
    method: 'get',
    url: config.baseUrl + '/api/getInfo',
    params
  });
}
