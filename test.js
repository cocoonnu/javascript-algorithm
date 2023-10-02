const deepClone = (target) => {
  if (typeof target !== 'object' || target === null) {
    return target
  }
  const constructor = target.constructor
  const reg = /^(RegExp|Set|Map|Date|Function)$/i
  if (reg.test(constructor.name)) {
    return new constructor(target)
  }
  const cloneTarget = constructor()
  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      cloneTarget[key] = deepClone(target[key])
    }
  }
  return cloneTarget
}
const obj = {
  name: 'cocoon',
  info: {
    city: '北京'
  },
  arr: [{ sex: 'man' }, 20, 30],
  set: new Set([1, 3, 4]),
  fn() {
    console.log(1111)
  },
  u: null,
}
const obj1 = deepClone(obj)

obj.info.city = '上海'
obj.set.add(6)

console.log(obj)
console.log(obj1)