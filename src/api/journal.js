import config from '@/request/config'
import request from '@/request/request'

export function addJournal(data)  {
  return request({
    method: 'post',
    url: config.baseUrl + '/journals',
    data
  })
}

export function getDiaryDatesByMonth(params) {
  return request({
    method: 'get',
    url: config.baseUrl + '/getDiaryDatesByMonth',
    params
  })
}