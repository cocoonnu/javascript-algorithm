/** 翻转指定字符串 */
const reserverStr = (str) => {
  const map = new Map([
    ['a', true],
    ['e', true],
    ['i', true],
    ['o', true],
    ['u', true],
  ])
  const res = str.split('')
  const vowelArrIndex = []
  const vowelArrValue = []
  for (let index = 0; index < str.length; index++) {
    if (map.get(str[index])) {
      vowelArrIndex.push(index)
      vowelArrValue.push(str[index])
    }
  }
  vowelArrValue.reverse()
  for (let index = 0; index < vowelArrIndex.length; index++) {
    res.splice(vowelArrIndex[index], 1, vowelArrValue[index])
  }
  return res.join('')
}
console.log('', reserverStr('lenovo'))