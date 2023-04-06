import request from '@/utils/request'

export function getDicts(params) {
  return request({
    url: 'sysDict/list',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'sysDict/saveOrUpdate',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysDict/deleteByIds',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'sysDict/saveOrUpdate',
    method: 'post',
    data
  })
}

export default { add, edit, del }
