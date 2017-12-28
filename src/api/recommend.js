import jsonp from 'common/js/jsonp'
import {commonParms, options} from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParms, {
    platform: 'h5',
    uin: 0,
    needNweCode: 1
  })
  return jsonp(url, data, options)
}
