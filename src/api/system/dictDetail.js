import request from '@/utils/request'

export function get(dictId) {
  const params = {
    dictId,
    page: 0,
    size: 9999
  }
  return request({
    url: 'sysDictDetail/page',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'sysDictDetail/saveOrUpdate',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysDictDetail/deleteByIds',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'sysDictDetail/saveOrUpdate',
    method: 'post',
    data
  })
}

export default { add, edit, del }
