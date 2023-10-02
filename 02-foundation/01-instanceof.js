// 实现一个自定义instanceof函数
// 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

function instanceOf(target, constructor) {
  if (typeof target != 'object' || target == null || typeof constructor != 'function') {
    return false
  }

  let targetProto = target.__proto__
  let constructorPrototype = constructor.prototype
  while (true) {
    if (targetProto == null) return false
    if (targetProto == constructorPrototype) return true
    targetProto = targetProto.__proto__
  }
}


function test() { }

let a = new test()
console.log(instanceOf(a, test))
console.log(instanceOf(null, test))
console.log(instanceOf(1, test))