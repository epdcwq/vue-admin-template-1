import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'class/saveOrUpdate',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'class/deleteByIds',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'class/saveOrUpdate',
    method: 'post',
    data
  })
}

export default { add, edit, del }
