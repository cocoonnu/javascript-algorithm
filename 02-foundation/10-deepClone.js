// 深拷贝：深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，
// 修改一个对象的属性，不会改变另一个对象的属性

// 使用循环递归的方式实现
const deepClone = (target) => {
  // 如果是基本类型或者null则直接返回本身
  if (typeof target !== 'object' || target === null) {
    return target
  }
  // 如果是非迭代的复杂类型则返回复制后的值
  const { constructor } = target
  const reg = /^(RegExp|Date|Set|Map|Function|WeakMap)$/i
  if (reg.test(constructor.name)) {
    return new constructor(target)
  }
  // 如果是可迭代类型
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