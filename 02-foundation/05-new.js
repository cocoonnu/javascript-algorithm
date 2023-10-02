// 实现自定义new操作符

function _new(constructor) {
  const obj = {}
  obj.__proto__ = constructor.prototype

  let res = constructor.call(obj)
  return (typeof res == 'object' && res != null) ? res : obj
}

// 有return
function test() {
  this.name = 'cocoon'

  return {
    name: 'co'
  }
}

// 无return
function test2() {
  this.name = 'cocoon'
}

let obj = _new(test)
console.log(obj)
obj = _new(test2)
console.log(obj)