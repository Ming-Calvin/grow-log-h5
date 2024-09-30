import config from '@/request/config'
import request from '@/request/request'

export function addJournal(data)  {
  return request({
    method: 'post',
    url: config.baseUrl + '/addDiaryEntry',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
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

export function getDiaryEntriesByDate(params) {
  return request({
    method: 'get',
    url: config.baseUrl + '/getDiaryEntriesByDate',
    params
  })
}

export function getDiaryEntryById(id) {
  return request({
    method: 'get',
    url: config.baseUrl + '/getDiaryEntryById/' + id
  })
}
