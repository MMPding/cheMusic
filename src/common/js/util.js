// 数组随机排序
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < arr.length; i++) {
    let j = getRandom(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

// 取min 和max之间的数 并且包含mix 和min
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
