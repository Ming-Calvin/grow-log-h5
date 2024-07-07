import config from '@/request/config'
import request from '@/request/request'

export function addJournal(data)  {
  return request({
    method: 'post',
    url: config.baseUrl + '/journals',
    data
  })
}