import Vue from 'vue'
import { getDicts } from '@/api/system/dict'
import { get as getDictDetail } from '@/api/system/dictDetail'

export default class Dict {
  constructor(dict) {
    this.dict = dict
  }

  async init(names, completeCallback) {
    if (names === undefined || name === null) {
      throw new Error('need Dict names')
    }

    // const map = new Map()
    // getDicts({
    //   names: names.toString()
    // }).then((res) => {
    //   res.map(item => {
    //     map.set(item.name, item.dictId)
    //   })
    // })

    const ps = []
    names.forEach(n => {
      Vue.set(this.dict.dict, n, {})
      Vue.set(this.dict.label, n, {})
      Vue.set(this.dict, n, [])

      getDicts({
        names: names.toString()
      }).then((res) => {
        ps.push(getDictDetail(res[0].dictId).then(data => {
          this.dict[n].splice(0, 0, ...data.list)
          data.list.forEach(d => {
            Vue.set(this.dict.dict[n], d.value, d)
            Vue.set(this.dict.label[n], d.value, d.label)
          })
        }))
      })

      // const dictId = map.get(n)
      // ps.push(getDictDetail(dictId).then(data => {
      //   this.dict[n].splice(0, 0, ...data.content)
      //   data.content.forEach(d => {
      //     Vue.set(this.dict.dict[n], d.value, d)
      //     Vue.set(this.dict.label[n], d.value, d.label)
      //   })
      // }))
    })
    await Promise.all(ps)
    completeCallback()
  }
}
