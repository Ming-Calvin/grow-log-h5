import config from '@/request/config';
import request from '@/request/request';

export function login(params) {
  return request({
    method: 'get',
    url: config.baseUrl + '/api/login',
    params
  });
}

export function getInfo(params) {
  return request({
    method: 'get',
    url: config.baseUrl + '/api/getInfo',
    params
  });
}
