import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'student/saveOrUpdate',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'student/deleteByIds',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'student/saveOrUpdate',
    method: 'post',
    data
  })
}

export default { add, edit, del }
